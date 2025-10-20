import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  // Turbopack config only for development
  ...(process.env.NODE_ENV === 'development' && {
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [LOADER]
        }
      }
    }
  }),
  // Production optimizations
  reactStrictMode: true,
  images: {
    domains: ['i.postimg.cc', 'slelguoygbfzlpylpxfs.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Exclude resend package from bundling (we use fetch API directly)
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('resend', '@react-email/render', '@react-email/components');
    }
    return config;
  },
};

export default nextConfig;
// Orchids restart: 1760967405296