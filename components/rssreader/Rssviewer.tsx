import React, { memo, useEffect } from "react";
import { Rssdata } from "./getrss";
export const Rssviewer = memo(function Rssviewer({
    src,
    data,
}: {
    src: string;
    data: Rssdata;
}) {
    useEffect(() => {
        // console.log("src", src);
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
});
