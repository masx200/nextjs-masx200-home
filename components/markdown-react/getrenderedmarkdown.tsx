"use strict";
import marked from "marked";
// @ts-ignore
import hljs from "../../src/assetsjs/highlight.min.js";
import { fetchtext } from "./fetchtext";

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
                ? hljs.highlight(code, { language: lang }).value
                : hljs.highlightAuto(code).value;
        },
    });
}
