'use client';

import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('HeroSection');

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 -mt-24">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="font-heading text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
          {t('title')}
        </h1>

        <p className="text-[18px] sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed px-4 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
          {t('subtitle')}
        </p>

        <a
          href="#features"
          className="inline-block bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white font-bold px-12 sm:px-16 py-5 sm:py-6 text-[20px] rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]"
        >
          {t('ctaPrimary')}
        </a>
      </div>
    </section>
  );
}
