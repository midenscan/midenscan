module.exports = {
  // https://github.com/vercel/next.js/discussions/32920
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    relay: {
      src: "./",
      artifactDirectory: "./libs/types/__generated__",
      language: "typescript",
    },
  },
};
