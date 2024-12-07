/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ativa o modo estrito do React

  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org', 'restcountries.com'], // Permite imagens destes domínios
  },

  // Variáveis de ambiente para uso no código
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://sua-api.com', // Usa variáveis de ambiente configuradas
  },
};


export default nextConfig;
