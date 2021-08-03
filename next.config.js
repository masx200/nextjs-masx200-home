const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// @ts-check
("use strict");

/**
 * @type {Partial< import('next/dist/next-server/server/config').NextConfig>}
 **/
const nextConfig = {
    poweredByHeader: false,
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, webpack, ...rest }
    ) => {
        console.log({
            buildId,
            dev,
            isServer,
            defaultLoaders,
            webpack,
            rest,
        });

        config.plugins = [...config.plugins, new ForkTsCheckerWebpackPlugin()];
        console.log({ config });
        return config;
    },
};
module.exports = nextConfig;
