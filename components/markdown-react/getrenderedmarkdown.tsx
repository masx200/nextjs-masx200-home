"use strict";
import marked from "marked";
// @ts-ignore
import hljs from "../../src/assetsjs/highlight.min.js";
import { fetchtext } from "./fetchtext";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const DOMPurify = (() => {
    const window = new JSDOM("").window;
    //@ts-ignore
    const DOMPurify = createDOMPurify(window);
    return DOMPurify;
})();

// console.log(DOMPurify);
// console.log(hljs)
const { Renderer } = marked;
class myrenderer extends Renderer {
    image(href: string | null, title: string | null, text: string): string {
        console.log(href, title, text);
        var result = super.image(href, title, text);
        console.log(result);
        if (result.startsWith("<img src=")) {
            result = result.replace("<img src=", "<img loading='lazy' src=");
        }
        return result;
    }
}
export async function getrenderedmarkdown(src: string) {
    const text = await fetchtext(src);

    const dirty = marked(text, {
        renderer: new myrenderer(),
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
    const clean = DOMPurify.sanitize(dirty);
    return clean;
}
