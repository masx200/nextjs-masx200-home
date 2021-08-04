"use strict";

import marked from "marked";
import React from "react";
//@ts-ignore
import hljs from "../../src/assetsjs/highlight.min.js";
// console.log(hljs)
export async function getrenderedmarkdown(src: string) {
    const text = await fetchtext(src);
    return marked(text, {
        baseUrl: src,
        highlight(code, lang) {
            // console.log(code,lang)
            // debugger
            const language = hljs.getLanguage(lang);
            // console.log(language)
            return language
                ? hljs.highlight(code, { language: language.name }).value
                : hljs.highlightAuto(code).value;
        },
    });
}

async function fetchtext(url: string, opts: RequestInit = {}) {
    var r = await fetch(new URL(url).href, opts);
    if (r.ok) {
        return await r.text();
    } else {
        throw new Error("fetch failed:" + url);
    }
}
export default React.memo(Staticmarkdown);

function Staticmarkdown(props: { src: string; markdown: string }) {
    let markdowncache = props.markdown;

    const markdown内容 = markdowncache;
    const 加载完成 = !!markdown内容;
    return (
        <div className="container">
            <div
                id="readme"
                className="Box Box--condensed instapaper_body md js-code-block-container"
            >
                <div className="Box-header d-flex flex-items-center flex-justify-between px-2">
                    <h3 className="Box-title pr-3">
                        <svg
                            className="octicon octicon-book"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
                            />
                        </svg>

                        <span>{props.src}</span>
                    </h3>
                    <div></div>
                </div>
                <div className="Box-body" style={{ padding: " 0px" }}>
                    <article
                        className="markdown-body entry-content p-5"
                        itemProp="text"
                        id="padding0"
                    >
                        <div className="article-content">
                            <div
                                style={{ display: 加载完成 ? "block" : "none" }}
                                className="container"
                                dangerouslySetInnerHTML={{
                                    __html: markdown内容,
                                }}
                            />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
