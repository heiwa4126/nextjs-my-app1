/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_BASEPATH ?? '';
const baseUrl = (process.env.APP_URL ?? 'http://localhost:3000') + basePath;

const nextConfig = {
  basePath,
  env: {
    basePath, // なんか酷いが動く
    baseUrl
  }
};

module.exports = nextConfig;
