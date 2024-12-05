export const API_ENDPOINTS = {
  CATEGORIES: 'categories',
  PRODUCTS: 'products',
  POPULAR_PRODUCTS: 'popular-products',
  SETTINGS: 'settings',
  CUSTOMER: 'me',
  COUPONS: 'coupons',
  COUPONS_VERIFY: '/coupons/verify',
  PARENT_CATEGORIES: 'categories',
  FEATURED_CATEGORIES: 'featured-categories',
  TYPE: 'types',
  UPLOAD: 'attachments',
  ORDER: 'orders',
  // ORDER_STATUS: "order-status",
  LOGIN: 'token',
  SOCIAL_LOGIN: 'social-login-token',
  REGISTER: 'signup',
  FORGET_PASSWORD: 'forget-password',
  LOGOUT: 'logout',
  CHANGE_PASSWORD: 'change-password',
  RESET_PASSWORD: 'reset-password',
  VERIFY_FORGET_PASSWORD: 'verify-forget-password-token',
  VERIFY_CHECKOUT: 'orders/checkout/verify',
  CONTACT: 'contact-us',
  ADDRESS: 'address',
  ATTRIBUTES: 'attributes',
  SHOPS: 'shops',
  ORDERS: 'orders',
  SEND_OTP_CODE: 'send-otp-code',
  VERIFY_OTP_CODE: 'verify-otp-code',
  OTP_LOGIN: 'otp-login',
  UPDATE_CONTACT: 'update-contact',
  CUSTOMERS: 'users',
  TAGS: 'tags',
  INSTAGRAM: `${process.env.NEXT_PUBLIC_INSTAGRAM_URL}&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_BASIC_DISPLAY_USER_TOKEN}`,
  INSTAGRAM_TOKEN: process.env.NEXT_PUBLIC_INSTAGRAM_BASIC_DISPLAY_USER_TOKEN,
  CARDS: '/cards',
  SET_DEFAULT_CARD: '/set-default-card',
  SAVE_PAYMENT_METHOD: '/save-payment-method',
  PAYMENT_INTENT: '/payment-intent',
  ORDERS_PAYMENT: '/orders/payment',
  SEND_VERIFICATION_EMAIL: '/email/verification-notification',
  USERS_SUBSCRIBE_TO_NEWSLETTER: '/subscribe-to-newsletter',
  USERS_WISHLIST: '/my-wishlists',
  USERS_WISHLIST_TOGGLE: '/wishlists/toggle',
  WISHLIST: '/wishlists',
  IN_WISHLIST: '/wishlists/in_wishlist',
  TERMS_AND_CONDITIONS: 'terms-and-conditions',
  FAQS: '/faqs',
  ORDERS_DOWNLOADS: '/downloads',
  GENERATE_DOWNLOADABLE_PRODUCT_LINK: '/downloads/digital_file',
  USERS_UPDATE_EMAIL: '/update-email',
  SHOP_MAINTENANCE_EVENT: 'shop-maintenance-event',
  BECAME_SELLER: 'became-seller',
  ABOUT:'/about'
};
