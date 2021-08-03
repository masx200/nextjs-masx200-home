"use strict";
module.exports = {
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
