import Head from "next/head";
import React, { memo } from "react";
//@ts-ignore
import markdwonurls from "../src/utils/markdownurls";
import Markdownreact from "./markdown-react/index";

export const markurl = markdwonurls["masx200-github-io"];
"use strict";

export default memo(function home({ markdown }: { markdown: string }) {
    return (
        <>
            <Head>
                <title>{"masx200的github主页-" + "首页"}</title>
            </Head>
            <div>
                <Markdownreact src={markurl} markdown={markdown} />
            </div>
        </>
    );
});
