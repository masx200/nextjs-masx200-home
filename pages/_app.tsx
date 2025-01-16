import "../styles/globals.css";
import "../styles/styles.64e1a1f300e049d9a965.css";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/layout.css";
import "../src/polyfill";
import MyHead from "../components/myhead";
import { memo } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
const app = memo(function MyApp({ Component, pageProps }: AppProps) {
    // console.log(Component, pageProps)
    if (pageProps.statusCode) {
        return (
            <>
                <MyHead />
                <Component {...pageProps} />
                <Analytics />
                <SpeedInsights />
            </>
        );
    }
    return (
        <>
            <MyHead />
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Analytics />
            <SpeedInsights />
        </>
    );
});

export default app;
