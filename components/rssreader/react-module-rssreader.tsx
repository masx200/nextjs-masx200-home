//@ts-ignore
import Head from "next/head";
import React, { useEffect, useMemo } from "react";
import { CustomRSSLink } from "./CustomRSSLink";
import { Rssdata } from "./getrss";
import rssfeedxml from "./rssfeedxml";
import { Rssviewer } from "./Rssviewer";

export { rssfeedxml };
/* eslint-disable react/prop-types */
"use strict";

//@ts-ignore
//@ts-ignore

export default React.memo(Rssreader);
function Rssreader({ sitename, data }: { sitename?: string; data?: Rssdata }) {
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
                {data && rssfeedurl
                    ? <Rssviewer src={rssfeedurl} data={data} />
                    : <React.Fragment />}
            </div>
        </>
    );
}
const rssmain = (
    <>
        <h2>异步fetch加载rss阅读器演示</h2>
        <p>使用fast-xml-parser把xml转换成json</p>
        <nav className="navbar navbar-expand-sm bg-light navbar-light ">
            <ul className="demo">
                <CustomRSSLink
                    data-loading-icon="mui-spinner mui-spinner-custom"
                    className="mui-btn mui-btn-royal mui-btn-outlined btn-lg"
                    href={{
                        pathname: "/react-rssreader" + "/" + "tmtpost",
                    }}
                >
                    加载tmtpost
                </CustomRSSLink>
                <CustomRSSLink
                    href={{
                        pathname: "/react-rssreader" + "/" + "iplaysoft",
                    }}
                    data-loading-icon="mui-spinner mui-spinner-custom"
                    className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                >
                    加载iplaysoft
                </CustomRSSLink>
                <CustomRSSLink
                    href={{
                        pathname: "/react-rssreader" + "/" + "landiannews",
                    }}
                    data-loading-icon="mui-spinner mui-spinner-custom"
                    className="mui-btn mui-btn-warning mui-btn-outlined btn-lg"
                >
                    加载landiannews
                </CustomRSSLink>
                <CustomRSSLink
                    href={{
                        pathname: "/react-rssreader" + "/" + "ithome",
                    }}
                    data-loading-icon="mui-spinner mui-spinner-custom"
                    className="mui-btn mui-btn-danger mui-btn-outlined btn-lg"
                >
                    加载ithome
                </CustomRSSLink>
                <CustomRSSLink
                    href={{
                        pathname: "/react-rssreader" + "/" + "ifanr",
                    }}
                    data-loading-icon="mui-spinner mui-spinner-custom"
                    className="mui-btn mui-btn-success mui-btn-outlined btn-lg"
                >
                    加载ifanr
                </CustomRSSLink>
{/*                 <CustomRSSLink
                    href={{
                        pathname: "/react-rssreader" + "/" + "pingwest",
                    }}
                    data-loading-icon="mui-spinner mui-spinner-custom"
                    className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                >
                    加载pingwest
                </CustomRSSLink> */}
            </ul>
        </nav>
    </>
);
