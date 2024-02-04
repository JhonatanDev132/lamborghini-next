/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = {
  compiler: {styledComponents: true},
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
