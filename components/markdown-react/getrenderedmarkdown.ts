"use strict";

import { JSDOM } from "jsdom";
// @ts-ignore
import { baseUrl } from "marked-base-url";
import { createpurify } from "./createpurify";
import { fetchtext } from "./fetchtext";
import { gfmHeadingId } from "marked-gfm-heading-id";
// @ts-ignore
import hljs from "../../src/assetsjs/highlight.min.js";
import { htmltoelement } from "./htmltoelement";
import { imgsetlazy } from "./imgsetlazy";
// @ts-ignore
import { mangle } from "marked-mangle";
// @ts-ignore
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
marked.use(
    markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, lang) {
            // console.log(code,lang)
            // debugger
            const language = hljs.getLanguage(lang);
            // console.log(language)
            return language
                ? hljs.highlight(code, { language: lang }).value
                : hljs.highlightAuto(code).value;
        },
    }),
);
const options = {
    // prefix: "my-prefix-",
};

marked.use(mangle());
marked.use(gfmHeadingId(options));
const DOMPurify = createpurify();
if (typeof document === "undefined") {
    const dom = new JSDOM(``, {});
    Reflect.set(global, "document", dom.window.document);
}

export async function getrenderedmarkdown(src: string): Promise<string> {
    marked.use(baseUrl(src));
    const text = await fetchtext(src);

    const dirty = marked(text, {
        langPrefix: "hljs language-", // renderer: new myrenderer(),
        // baseUrl: src,
        // highlight(code, lang) {

        // },
    });
    const clean = DOMPurify.sanitize(dirty);
    const element = htmltoelement(`<div>${clean}</div>`);
    imgsetlazy(element);
    const html = element.innerHTML;
    return html;
}
