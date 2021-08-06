//@ts-ignore
import React, { useEffect, useMemo } from "react";

import Head from "next/head";
import Link from "next/link";
import rssfeedxml from "./rssfeedxml";
import { Rssdata } from "./getrss";
export { rssfeedxml };
/* eslint-disable react/prop-types */
("use strict");

//@ts-ignore
//@ts-ignore

export default React.memo(Rssreader);
function Rssreader({ sitename, data }: { sitename?: string; data?: Rssdata }) {
    const rssfeedurl: string | undefined = sitename
        ? Reflect.get(rssfeedxml, sitename)
        : undefined;

    useEffect(() => {
        console.log(sitename);
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
                <h2>异步fetch加载rss阅读器演示</h2>
                <p>使用fast-xml-parser把xml转换成json</p>
                <nav className="navbar navbar-expand-sm bg-light navbar-light ">
                    <ul className="demo">
                        <Link
                            href={{
                                pathname: "/react-rssreader" + "/" + "tmtpost",
                            }}
                        >
                            <a
                                data-loading-icon="mui-spinner mui-spinner-custom"
                                className="mui-btn mui-btn-royal mui-btn-outlined btn-lg"
                            >
                                加载tmtpost
                            </a>
                        </Link>
                        <Link
                            href={{
                                pathname:
                                    "/react-rssreader" + "/" + "iplaysoft",
                            }}
                        >
                            <a
                                data-loading-icon="mui-spinner mui-spinner-custom"
                                className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                            >
                                加载iplaysoft
                            </a>
                        </Link>
                        <Link
                            href={{
                                pathname:
                                    "/react-rssreader" + "/" + "landiannews",
                            }}
                        >
                            <a
                                data-loading-icon="mui-spinner mui-spinner-custom"
                                className="mui-btn mui-btn-warning mui-btn-outlined btn-lg"
                            >
                                加载landiannews
                            </a>
                        </Link>
                        <Link
                            href={{
                                pathname: "/react-rssreader" + "/" + "ithome",
                            }}
                        >
                            <a
                                data-loading-icon="mui-spinner mui-spinner-custom"
                                className="mui-btn mui-btn-danger mui-btn-outlined btn-lg"
                            >
                                加载ithome
                            </a>
                        </Link>
                        <Link
                            href={{
                                pathname: "/react-rssreader" + "/" + "ifanr",
                            }}
                        >
                            <a
                                data-loading-icon="mui-spinner mui-spinner-custom"
                                className="mui-btn mui-btn-success mui-btn-outlined btn-lg"
                            >
                                加载ifanr
                            </a>
                        </Link>
                        <Link
                            href={{
                                pathname: "/react-rssreader" + "/" + "pingwest",
                            }}
                        >
                            <a
                                data-loading-icon="mui-spinner mui-spinner-custom"
                                className="mui-btn mui-btn-primary mui-btn-outlined btn-lg"
                            >
                                加载pingwest
                            </a>
                        </Link>
                    </ul>
                </nav>
                {data && rssfeedurl ? (
                    <Rssviewer src={rssfeedurl} data={data} />
                ) : (
                    <React.Fragment />
                )}
            </div>
        </>
    );
}
function Rssviewer({ src, data }: { src: string; data: Rssdata }) {
    useEffect(() => {
        console.log(src);
    }, [src]);
    const rssfeedurl = src;

    const rssstatetitle = data?.title;
    const rssstatedescription = data?.description;
    const rssstate = data?.content;
    const loaded = true;
    return (
        <>
            <header
                className="App-header"
                style={{
                    display: loaded ? "block" : "none",
                }}
            >
                <div>
                    <h5>{rssfeedurl}</h5>
                </div>
                <div style={{ maxWidth: "100%" }}>
                    <h3>
                        <b>{rssstatetitle}</b>
                    </h3>
                    <p>{rssstatedescription}</p>

                    <ul className="mui-table-view">
                        {rssstate
                            ? rssstate.map((e, index) => (
                                  <li
                                      className="mui-table-view-cell mui-media"
                                      key={index}
                                      /* style="width: 100%;" */
                                      /* 每个项目占一行,防止一行多个项目 */
                                      style={{ width: " 100%" }}
                                  >
                                      <div className="mui-media-body">
                                          <a
                                              href={e.link}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                          >
                                              <b> {e.title}</b>
                                          </a>
                                          <a
                                              href={e.link}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                          >
                                              <p className="mui-ellipsis">
                                                  {e.link}
                                              </p>
                                          </a>

                                          <details>
                                              <summary>详情</summary>
                                              <p
                                                  className="mui-ellipsis"
                                                  style={{
                                                      whiteSpace: "normal",
                                                      wordBreak: "break-all",
                                                      wordWrap: "break-word",
                                                  }}
                                              >
                                                  {e.description}
                                              </p>
                                          </details>
                                      </div>
                                  </li>
                              ))
                            : null}
                    </ul>
                </div>
            </header>
        </>
    );
}
