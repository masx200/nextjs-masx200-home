"use strict";
export function imgsetlazy(tmpdoc: HTMLElement) {
    Array.from(tmpdoc.querySelectorAll("img")).forEach((e) => {
        e.loading = "lazy";
        e.setAttribute("loading", "lazy");
    });
}
