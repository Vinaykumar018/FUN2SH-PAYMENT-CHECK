import type { FC } from 'react';
import { useSettings } from '@contexts/settings.context';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { ROUTES } from '@lib/routes';

const WidgetContact: FC = () => {
  const { t } = useTranslation();
  const settings = useSettings();

  const contactDetails = settings?.contactDetails;

  return (
    <div>
      <h4 className="mb-5 text-sm text-yellow-300 font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
        {t(`Reach Us`)}
      </h4>
      <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5 text-white">
        {ROUTES?.CONTACT && (
          <li className="flex items-baseline">
            <Link
              href={ROUTES.CONTACT}
              className="transition-colors duration-200 hover:text-white text-white"
            >
              {t(`text-page-contact-us`)}
            </Link>
          </li>
        )}

        {contactDetails?.email && (
          <li className="flex items-baseline">
            {t('text-email')}: {contactDetails.email}
          </li>
        )}

        {contactDetails?.website && (
          <li className="flex items-baseline">
            {/* {t('text-website')}: */}
            <Link
              href={contactDetails.website}
              className=" transition-colors duration-200 "
            >
              {contactDetails.website}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default WidgetContact;
