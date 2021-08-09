import Head from "next/head";
import { memo } from "react";
//@ts-ignore
import markdwonurls from "../src/utils/markdownurls";
import Markdownreact from "./markdown-react/index";

("use strict");
export const markurl = markdwonurls["webpack-react-vue-spa-awesome-config"];
export default memo(function component({ markdown }: { markdown: string }) {
    return (
        <div>
            <Head>
                <title>
                    {
                        " 极速、零配置的 web 应用打包工具, 同时支持 react 和 vue 的单页面应用,提供开箱即用支持"
                    }
                </title>
            </Head>
            <Markdownreact src={markurl} markdown={markdown} />
        </div>
    );
});
