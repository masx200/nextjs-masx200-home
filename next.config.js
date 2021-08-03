// @ts-check
"use strict";

/**
 * @type {Partial< import('next/dist/next-server/server/config').NextConfig>}
 **/
const nextConfig = {
    poweredByHeader: false,
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, webpack, ...rest },
        ...args
    ) => {
        console.log({
            buildId,
            dev,
            isServer,
            defaultLoaders,
            webpack,
            rest,
            args,
        });

        console.log({ config });

        return config;
    },
};
module.exports = nextConfig;
