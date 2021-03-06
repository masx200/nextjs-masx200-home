"use strict";
// @ts-ignore
import { marked } from "marked";
// @ts-ignore
import hljs from "../../src/assetsjs/highlight.min.js";
import { fetchtext } from "./fetchtext";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const DOMPurify = createpurify();
if (typeof document === "undefined") {
    const dom = new JSDOM(``, {});
    Reflect.set(global, "document", dom.window.document);
}

// console.log(DOMPurify);
// console.log(hljs)
// const { Renderer } = marked;
// class myrenderer extends Renderer {
//     image(href: string | null, title: string | null, text: string): string {
//         // console.log(href, title, text);
//         var result = super.image(href, title, text);
//         // console.log(result);
//         if (result.startsWith("<img src=")) {
//             result = result.replace("<img src=", "<img loading='lazy' src=");
//         }
//         return result;
//     }
// }
function createpurify() {
    const window = new JSDOM("").window;
    //@ts-ignore
    const DOMPurify = createDOMPurify(window);
    return DOMPurify;
}

export async function getrenderedmarkdown(src: string): Promise<string> {
    const text = await fetchtext(src);

    const dirty = marked(text, {
        // renderer: new myrenderer(),
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
    const element = htmltoelement(`<div>${clean}</div>`);
    imgsetlazy(element);
    const html = element.innerHTML;
    return html;
}
export function htmltoelement(html: string): HTMLElement {
    const container = document.createElement("div");
    container.innerHTML = html;
    const ret = container.childNodes[0] as HTMLElement;
    if (!ret) {
        throw Error("html element not found");
    }
    return ret;
}
export function imgsetlazy(tmpdoc: HTMLElement) {
    Array.from(tmpdoc.querySelectorAll("img")).forEach((e) => {
        e.loading = "lazy";
        e.setAttribute("loading", "lazy");
    });
}
