const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// @ts-check
("use strict");
const TerserPlugin = require("terser-webpack-plugin");
/**
 * @type {Partial< import('next/dist/next-server/server/config').NextConfig>}
 **/
const nextConfig = {
    eslint: {
        // Warning: Dangerously allow production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
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
            ...rest,
        });
        const ftcwp = new ForkTsCheckerWebpackPlugin();
        config.plugins = [...config.plugins, ftcwp];

        const terserplugin = new TerserPlugin({
            terserOptions: {
                ecma: 5,
                parse: {
                    ecma: 8,
                },
                compress: {
                    warnings: !1,
                    comparisons: !1,
                    inline: 2,
                    drop_console: true,
                    drop_debugger: true,
                    pure_funcs: ["console.log"],
                },
                mangle: {
                    safari10: !0,
                },
                output: {
                    ecma: 5,
                    comments: !1,
                    ascii_only: !0,
                },
            },
            parallel: !0,
        });
        config.optimization.minimizer = [terserplugin,
            ...config.optimization.minimizer,
            
        ];
        if (!dev) {
            config.optimization.minimize = true;
        }
        console.log({ config });
        return config;
    },
};
module.exports = nextConfig;
