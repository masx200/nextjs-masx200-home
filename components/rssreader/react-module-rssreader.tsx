//@ts-ignore
import Head from "next/head";
import React, { useEffect, useMemo } from "react";
import { CustomRSSLink } from "./CustomRSSLink";
import { Rssdata } from "./getrss";
import rssfeedxml from "./rssfeedxml.ts";
import { Rssviewer } from "./Rssviewer.tsx";

export { rssfeedxml };
/* eslint-disable react/prop-types */
("use strict");

//@ts-ignore
//@ts-ignore

export default React.memo(Rssreader);
function Rssreader({ sitename, data }: { sitename?: string; data?: Rssdata }) {
    const rssmain = useMemo(() => {
        return getrssmain();
    }, []);
    const rssfeedurl: string | undefined = sitename
        ? Reflect.get(rssfeedxml, sitename)
        : undefined;

    useEffect(() => {
        // console.log("sitename", sitename);
    }, [sitename]);
    const title = useMemo(() => {
        if ("undefined" !== typeof sitename) {
            return "React router App-" + "rssreader-" + sitename;
        } else {
            return "React router App-" + "rssreader";
        }
    }, [sitename]);
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="">
                {rssmain}
                {data && rssfeedurl ? (
                    <Rssviewer src={rssfeedurl} data={data} />
                ) : (
                    <React.Fragment />
                )}
            </div>
        </>
    );
}

function getrssmain() {
    const rssmain = (
        <>
            <h2>异步fetch加载rss阅读器演示</h2>
            <p>使用fast-xml-parser把xml转换成json</p>
            <nav className="navbar navbar-expand-sm bg-light navbar-light ">
                <ul
                    className="demo"
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignContent: "center!important",
                        justifyContent: "space-between",
                        alignItems: "center!important",
                    }}
                >
                    {Object.keys(rssfeedxml).map((key, index) => {
                        return (
                            <CustomRSSLink
                                key={index}
                                data-loading-icon="mui-spinner mui-spinner-custom"
                                className="mui-btn mui-btn-royal mui-btn-outlined btn-lg"
                                href={{
                                    pathname:
                                        "/react-rssreader" +
                                        "/" +
                                        key +
                                        ".html",
                                }}
                            >
                                加载{key}
                            </CustomRSSLink>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
    return rssmain;
}
