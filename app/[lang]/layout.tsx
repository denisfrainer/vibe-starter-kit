/*
  app/[lang]/layout.tsx
  Layout de i18n — envolve children com NextIntlClientProvider.
  <html> e <body> agora vivem em app/layout.tsx (root).
*/

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';

// CRÍTICO para SSG: generateStaticParams pré-renderiza todas as rotas de idioma
export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale: lang });

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
