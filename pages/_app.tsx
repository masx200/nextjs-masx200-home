import "../styles/globals.css";
import "../styles/styles.64e1a1f300e049d9a965.css";
import { AppProps } from "next/app";
import Layout from "../components/layout";

import "../src/polyfill";
import MyHead from "../components/myhead";
'undefined'!==typeof window &&
    window.addEventListener(
        "load",
        () => {
            import("clipboard").then((module) => {
                const ClipboardJS = module.default;

                new ClipboardJS(".btn").on("success", function (e) {
                    // console.log(e);
                    // console.info("Text:", e.text);

                    e.clearSelection();
                });
            });
        },
        { once: true }
    );
const app = function MyApp({ Component, pageProps }: AppProps) {
    // console.log(Component, pageProps)
    if (pageProps.statusCode) {
        return <Component {...pageProps} />;
    }
    return (
        <>
            <MyHead />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default app;
