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
    
    env: {
        API_URL: 'https://sua-api.com', // Exemplo
      },
  

};

export default nextConfig;
