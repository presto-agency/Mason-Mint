/** @type {import('next').NextConfig} */
const path = require("path");
const loaderUtils = require("loader-utils");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, "/")}#className:${exportName}`
      ),
      "md4",
      "base64",
      6
    )
    .replace(/[^a-zA-Z0-9-_]/g, "_")
    .replace(/^(-?\d|--)/, "_$1");


const nextConfig = {
  reactStrictMode: true,
  webpack(config, { dev }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    
    config.resolve.alias = {
      ...config.resolve.alias,
      ['react-is']: path.resolve(__dirname, 'node_modules/react-is')
    }

    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.filter((rule) => Array.isArray(rule.use));

    if (!dev)
      rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
          if (
            moduleLoader.loader?.includes("css-loader") &&
            !moduleLoader.loader?.includes("postcss-loader")
          )
            moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
        });
      });
    config.plugins.push(new DuplicatePackageCheckerPlugin())
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
