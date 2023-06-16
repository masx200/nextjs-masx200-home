"use strict";
export function htmltoelement(html: string): HTMLElement {
    const container = document.createElement("div");
    container.innerHTML = html;
    const ret = container.childNodes[0] as HTMLElement;
    if (!ret) {
        throw Error("html element not found");
    }
    return ret;
}
