if (!self.define) {
    const e = (e) => {
            "require" !== e && (e += ".js");
            let s = Promise.resolve();
            return (
                t[e] ||
                    (s = new Promise(async (s) => {
                        if ("document" in self) {
                            const t = document.createElement("script");
                            (t.src = e),
                                document.head.appendChild(t),
                                (t.onload = s);
                        } else importScripts(e), s();
                    })),
                s.then(() => {
                    if (!t[e])
                        throw new Error(
                            `Module ${e} didn’t register its module`
                        );
                    return t[e];
                })
            );
        },
        s = (s, t) => {
            Promise.all(s.map(e)).then((e) => t(1 === e.length ? e[0] : e));
        },
        t = { require: Promise.resolve(s) };
    self.define = (s, a, n) => {
        t[s] ||
            (t[s] = Promise.resolve().then(() => {
                let t = {};
                const r = { uri: location.origin + s.slice(1) };
                return Promise.all(
                    a.map((s) => {
                        switch (s) {
                            case "exports":
                                return t;
                            case "module":
                                return r;
                            default:
                                return e(s);
                        }
                    })
                ).then((e) => {
                    const s = n(...e);
                    return t.default || (t.default = s), t;
                });
            }));
    };
}
define("./sw.js", ["./workbox-ea903bce"], function (e) {
    "use strict";
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url: "/_next/static/chunks/152.e290d2147bad1b72a6ae.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/988-52e45e441cee4b7bf1fb.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/b637e9a5-a2e24fbd690d770dc8c5.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/framework-92300432a1172ef1338b.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/main-41e93213c45c9987b3ae.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/pages/_app-74b3d1ca11d2a3e132c1.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/pages/excellent-vscode-extensions-for-javascript-e02f9802648cb172996d.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/pages/index-3e8e88bf0f3bf73617f1.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/pages/nextabout-10ea1404a8eb490e77a9.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/pages/react-home-2e92f79ec5ac58208925.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/pages/react-huami-b92d2150c63462969f56.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/pages/webpack-react-vue-spa-awesome-config-5df976d65c98aa1ae132.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/chunks/webpack-471440a971ec6d4ddcc9.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/css/8ec57f03af0b75f921c5.css",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/css/df9ff9c3b7dbd964a28a.css",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/css/e6147bed90db339cd4a1.css",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/dJ3HmLCISohL2EfvCsVFT/_buildManifest.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/dJ3HmLCISohL2EfvCsVFT/_ssgManifest.js",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/image/src/pictures/babeljs.93957982db09411054d96cee5af63acc.png",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/image/src/pictures/bootstrap.00dc04dcc411aa44f40a0f7e05f44234.png",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/image/src/pictures/logo-jquery.26a291f76a1ae3cfcca6b63ea606edf8.png",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/image/src/pictures/parcel.164cd91c583b612c6a3314f4dee5152b.jpg",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/image/src/pictures/react.1de34013a2655d74b0a394a551c7f5d6.svg",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/image/src/pictures/vercel.932637c16de69eb6be59c2d73e883585.svg",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/image/src/pictures/vue.14e254cf192611c78386862e33ec0592.png",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/_next/static/image/src/pictures/webpack.59f0e05da1f3cae010c3a9b3a5e630b3.svg",
                    revision: "dJ3HmLCISohL2EfvCsVFT",
                },
                {
                    url: "/favicon.ico",
                    revision: "c30c7d42707a47a3f4591831641e50dc",
                },
            ],
            { ignoreURLParametersMatching: [] }
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            "/",
            new e.NetworkFirst({
                cacheName: "start-url",
                plugins: [
                    {
                        cacheWillUpdate: async ({
                            request: e,
                            response: s,
                            event: t,
                            state: a,
                        }) =>
                            s && "opaqueredirect" === s.type
                                ? new Response(s.body, {
                                      status: 200,
                                      statusText: "OK",
                                      headers: s.headers,
                                  })
                                : s,
                    },
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: "google-fonts-webfonts",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 31536e3,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({
                cacheName: "google-fonts-stylesheets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-font-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-image-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({
                cacheName: "next-image",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:mp3|mp4)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-media-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-js-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: "static-style-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({
                cacheName: "next-data",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: "static-data-assets",
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                const s = e.pathname;
                return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
            },
            new e.NetworkFirst({
                cacheName: "apis",
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                return !e.pathname.startsWith("/api/");
            },
            new e.NetworkFirst({
                cacheName: "others",
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        ),
        e.registerRoute(
            ({ url: e }) => !(self.origin === e.origin),
            new e.NetworkFirst({
                cacheName: "cross-origin",
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 3600,
                        purgeOnQuotaError: !0,
                    }),
                ],
            }),
            "GET"
        );
});
