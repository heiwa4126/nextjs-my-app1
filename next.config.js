/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_BASEPATH ?? '';
const appUrl = (process.env.APP_URL ?? 'http://localhost:3000') + basePath;

const nextConfig = {
  basePath,
  env: {
    basePath, // なんか酷いが動く
    appUrl
  }
};

module.exports = nextConfig;
