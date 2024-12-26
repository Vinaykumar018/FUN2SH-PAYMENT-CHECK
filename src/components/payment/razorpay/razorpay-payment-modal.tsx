import React, { useState, useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import useRazorpay from '@lib/use-razorpay';
import { formatAddress } from '@lib/format-address';
import { useTranslation } from 'next-i18next';
import { useSettings } from '@framework/settings';
import Spinner from '@components/ui/loaders/spinner/spinner';
import { useOrderPayment } from '@framework/orders';

interface Props {
  paymentIntentInfo: PaymentIntentInfo;
  trackingNumber: string;
  paymentGateway: PaymentGateway;
}

const RazorpayPaymentModal: React.FC<Props> = ({
  trackingNumber,
  paymentIntentInfo,
}) => {
  const { t } = useTranslation();
  const { loadRazorpayScript, checkScriptLoaded } = useRazorpay();
  const { data: settings, isLoading: isSettingsLoading } = useSettings();
  const { createOrderPayment } = useOrderPayment();
  
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'failure'>('idle');

  const paymentHandle = useCallback(async () => {
    if (!checkScriptLoaded()) {
      await loadRazorpayScript();
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: paymentIntentInfo.amount!,
      currency: paymentIntentInfo.currency!,
      name: paymentIntentInfo.customer_name!,
      description: `${t('text-order')}#${trackingNumber}`,
      image: settings?.options?.logo?.original,
      order_id: paymentIntentInfo.payment_id!,
      handler: async () => {
        try {
          await createOrderPayment({
            tracking_number: trackingNumber,
            payment_gateway: 'razorpay',
          });
          setPaymentStatus('success');
          toast.success('Payment successful! Thank you for your order.');
        } catch (error) {
          console.error('Payment success handling failed:', error);
          setPaymentStatus('failure');
          toast.error('Payment successful, but an error occurred updating your order.');
        }
      },
      prefill: {
        name: paymentIntentInfo.customer_name,
        contact: `+${paymentIntentInfo.customer_contact}`,
        email: paymentIntentInfo.customer_email,
      },
      notes: {
        address: formatAddress(paymentIntentInfo.billing_address),
      },
      modal: {
        ondismiss: () => {
          console.warn('Payment modal dismissed.');
          setPaymentStatus('failure');
          toast.warn('Payment not completed. Please try again.');
        },
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  }, [paymentIntentInfo, settings, trackingNumber]);

  useEffect(() => {
    if (!isSettingsLoading) {
      paymentHandle();
    }
  }, [isSettingsLoading, paymentHandle]);

  if (isSettingsLoading) {
    return <Spinner showText={false} />;
  }

  return (
    <div>
      {paymentStatus === 'success' && <p>Payment successful! Your order is confirmed.</p>}
      {paymentStatus === 'failure' && <p>Payment failed. Please try again.</p>}
    </div>
  );
};

export default RazorpayPaymentModal;
