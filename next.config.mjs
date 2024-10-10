/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

// Convert `__filename` and `__dirname` in an ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'flexjobs.com',
        },
        {
            protocol: 'https',
            hostname: 'thecodework.com',
          },
          {
              protocol: 'https',
              hostname: 'demoapus1.com',
            }
            ,
          {
              protocol: 'https',
              hostname: 'i.imgur.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
              }
        // 
       
      ],
    },
    webpack: (config, { isServer }) => {
      config.resolve.alias['@'] = path.join(__dirname, 'src');
      return config;
    },
  };
export default nextConfig;

// 