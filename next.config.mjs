/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true, // Ativa o modo estrito do React
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com', // Permite imagens deste domínio
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/api',
        destination: '/api-docs',
        permanent: true, // Redireciona permanentemente
      },
    ];
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://restcountries.com/v3.1', // Configura variável de ambiente
  },


};

export default nextConfig;
