/** @type {import('next').NextConfig} */

const basePath = process.env.NEXTCONFIG_BASEPATH ?? '';

console.log(`*** basePath=${basePath}`);

const nextConfig = {
  basePath,
  output: process.env.NEXTCONFIG_OUTPUT
};

module.exports = nextConfig;
