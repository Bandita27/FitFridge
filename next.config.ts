import type { NextConfig } from "next";
import path from "node:path";

let loaderPath: string;
try {
  loaderPath = require.resolve('orchids-visual-edits/loader.js');
} catch {
  loaderPath = '';
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(loaderPath && {
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [loaderPath]
        }
      }
    }
  })
};

export default nextConfig;