import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  // CRÍTICO para SSG e Netlify/Vercel (Static Export)
  output: 'export',
  
  // Recomendado para melhor compatibilidade com rotas estáticas e next-intl
  trailingSlash: true,

  // Opcional: Configuração de imagens para Static Export
  images: {
    unoptimized: true, 
  },
  
  // Experimental: Otimização de CSS para PageSpeed
  experimental: {
    optimizeCss: true,
  },
};

export default withNextIntl(nextConfig);
