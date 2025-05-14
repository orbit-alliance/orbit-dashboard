import {getRequestConfig} from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import translations, { TranslationsKeys } from './namespaces';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('locale')?.value || 'en') as TranslationsKeys;
  const current_ns = translations[locale];
  return {
    locale,
    messages: current_ns,
  };
});