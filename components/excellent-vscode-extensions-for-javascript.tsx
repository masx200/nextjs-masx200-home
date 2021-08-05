import Head from "next/head";
import React from "react";
//@ts-ignore
import markdwonurls from "../src/utils/markdownurls";

import Markdownreact from "./markdown-react/index";
export const markurl =
    markdwonurls["excellent-vscode-extensions-for-javascript"];

export default React.memo(component);

function component({ markdown }: { markdown: string }) {
    return (
        <div>
            {" "}
            <Head>
                <title>{"编程的vscode的优秀扩展推荐和vscode 的推荐设置"}</title>
            </Head>
            <Markdownreact src={markurl} markdown={markdown} />
        </div>
    );
}
