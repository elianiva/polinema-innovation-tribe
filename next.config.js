/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    const nextImageLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    nextImageLoaderRule.resourceQuery = {
      not: [...nextImageLoaderRule.resourceQuery.not, /icon/]
    };

    config.module.rules.push({
      issuer: nextImageLoaderRule.issuer,
      resourceQuery: /icon/, // *.svg?icon
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

module.exports = nextConfig;
