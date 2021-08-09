import Head from "next/head";
import { memo } from "react";
export default memo(function myHead() {
    return (
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" key="icon" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
    );
});
