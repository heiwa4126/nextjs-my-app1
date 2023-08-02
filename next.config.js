/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_BASEPATH ?? '';
const rawSelfUrl = process.env.NEXT_SELFURL ?? 'http://localhost:3000';
const selfUrl = rawSelfUrl + basePath;
const baseUrl = (process.env.NEXT_BASEURL ?? rawSelfUrl) + basePath;

const nextConfig = {
  basePath,
  env: {
    basePath,
    selfUrl,
    baseUrl
  },
  output: 'standalone'
};

module.exports = nextConfig;
