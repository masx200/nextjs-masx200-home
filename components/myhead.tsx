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
            <link
                rel="stylesheet"
                href="https://cdn.staticfile.org/mui/3.7.1/css/mui.min.css"
            />
            <link
                rel="stylesheet"
                href="/github-6556dfa9be535e551ffffaadfecdad99.min.css"
            />
            <link
                rel="stylesheet"
                href="/github-frameworks-a2fba223d5af91496cac70d4ec3624df.min.css"
            />
            <link
                rel="stylesheet"
                href="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
            />
        </Head>
    );
});
