"use strict";

import { JSDOM } from "jsdom";
import createDOMPurify from "dompurify";

export function createpurify() {
    const window = new JSDOM("").window;
    //@ts-ignore
    const DOMPurify = createDOMPurify(window);
    return DOMPurify;
}
