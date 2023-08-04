/** @type {import('next').NextConfig} */

const basePath = process.env.NEXTCONFIG_BASEPATH ?? '';

console.log(`*** basePath=${basePath}`);

const rawSelfUrl = process.env.NEXT_SELFURL ?? 'http://localhost:3000';

const nextConfig = {
  basePath,
  output: process.env.NEXTCONFIG_OUTPUT,
  env: {
    // なんかヤだけど、next.config.jsがcjsなのでこうやってごまかすのが楽
    basePath,
    selfUrl: rawSelfUrl + basePath,
    baseUrl: (process.env.NEXT_BASEURL ?? rawSelfUrl) + basePath
  }
};

module.exports = nextConfig;
