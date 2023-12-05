// types
import { DefaultConfigProps } from 'types/config';

// ==============================|| THEME CONSTANT  ||============================== //

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';
export const ALCHEMY_KEY = 'OZSef8mrVkop2Eili7EYuwIZU8cFL265';
export const NEXT_PUBLIC_MAGIC_API_KEY = 'pk_live_2D0AA46ED4A4A8B6';
export const ALCHEMY_RPC_URL = 'https://eth-mainnet.g.alchemy.com/v2/OZSef8mrVkop2Eili7EYuwIZU8cFL265';
export const NEXT_PUBLIC_ALCHEMY_GAS_MANAGER_POLICY_ID = '061a4f08-cd85-4386-8114-ece82ad2b284';

export const APP_DEFAULT_PATH = '/debot/home';
export const HORIZONTAL_MAX_ITEM = 6;
export const DRAWER_WIDTH = 260;

// ==============================|| THEME CONFIG  ||============================== //

const config: DefaultConfigProps = {
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  menuOrientation: 'vertical',
  miniDrawer: false,
  container: true,
  mode: 'light',
  presetColor: 'default',
  themeDirection: 'ltr'
};

export default config;
