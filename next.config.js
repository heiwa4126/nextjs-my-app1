/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_BASEPATH ?? '';
const selfUrl0 = process.env.NEXT_SELFURL ?? 'http://localhost:3000' + basePath;
const selfUrl = selfUrl + basePath;
const baseUrl = (process.env.NEXT_BASEURL ?? selfUrl0) + basePath;

const nextConfig = {
  basePath,
  env: {
    basePath, // 別名
    selfUrl,
    baseUrl
  }
};

module.exports = nextConfig;
