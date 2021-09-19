/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['courses-top.ru']
  },
  webpack5(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });
    return config;
  },
}
