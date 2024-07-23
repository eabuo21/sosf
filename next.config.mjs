/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Allow images from any hostname
          port: '',
          pathname: '/**', // Allow images from any path
        },
      ],
    },
  };
  
  export default nextConfig;
  