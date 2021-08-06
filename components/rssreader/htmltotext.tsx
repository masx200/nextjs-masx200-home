import { JSDOM } from "jsdom";
const document = new JSDOM("").window.document;
export function htmltotext(description: string): string {
    //alert(description)
    const body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = description;
    if ("undefined" === typeof body.innerText) {
        Object.defineProperty(body, "innerText", {
            get() {
                return this.textContent;
            },
            set(value) {
                this.textContent = value;
            },
        });
    }
    const text = body.innerText;

    // console.log("text", text);
    //alert(text);
    return text;
}
