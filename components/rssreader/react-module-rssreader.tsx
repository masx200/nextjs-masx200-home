//@ts-ignore
import Head from "next/head";
import React, { useEffect, useMemo } from "react";
import { getrssmain } from "./getrssmain.tsx";
import { RSSDATA } from "./RSSDATA";
import rssfeedxml from "./rssfeedxml.ts";
import { Rssviewer } from "./Rssviewer.tsx";

export { rssfeedxml };
/* eslint-disable react/prop-types */
("use strict");

//@ts-ignore
//@ts-ignore

export default React.memo(Rssreader);
function Rssreader({ sitename, data }: { sitename?: string; data?: RSSDATA }) {
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
