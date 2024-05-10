const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// @ts-check
("use strict");

/**
 * @type {Partial< import('next/dist/next-server/server/config').NextConfig>}
 */
const nextConfig = {
    output: "export",

    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    poweredByHeader: false,
    webpack: (
        config,
        { dev } // { buildId, dev, isServer, defaultLoaders, webpack, ...rest }
    ) => {
        // console.log({
        //     buildId,
        //     dev,
        //     isServer,
        //     defaultLoaders,
        //     webpack,
        //     ...rest,
        // });
        const ftcwp = new ForkTsCheckerWebpackPlugin();
        config.plugins = [...config.plugins, ftcwp];

        if (!dev) {
            config.optimization.minimize = true;
        }
        // console.log({ config });
        return config;
    },
};
module.exports = withPWA({
    register: true,
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    runtimeCaching,
})(nextConfig);
