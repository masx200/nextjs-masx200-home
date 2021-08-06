import * as parser from "fast-xml-parser";

import { fetchtext } from "../markdown-react/fetchtext";
import { htmltotext } from "./htmltotext";

// cachepromise
// console.log(hljs)
export interface Rssdata {
    title: string;
    content: {
        link: string;
        title: string;
        description: string;
    }[];
    description: string;
}
export const getrss = async function (src: string): Promise<Rssdata> {
    const text = await fetchtext(src);
    const xmlstring = text;
    var str = xmlstring;

    var data = parser.parse(str);

    var title: string = data.rss.channel.title;

    var description: string = data.rss.channel.description;
    var myrsscontent: {
        link: string;
        title: string;
        description: string;
    }[] = data.rss.channel.item.map(
        (e: {
            description: string;
            link: string;
            title: string;
            ["content:encoded"]?: string;
        }) => {
            let des = e.description;
            const { link, title } = e;
            if (Reflect.has(e, "content:encoded")) {
                des += Reflect.get(e, "content:encoded");
            }
            //   console.log(e);

            /* 如果 e.description是以以文字开头则在外面包上一个div*/
            //@ts-ignore
            //     if (e["content:encoded"]) {
            //@ts-ignore
            //        alert(e["content:encoded"]);
            //      }
            console.log(des);
            des = htmltotext(des);

            des = htmltotext(des);
            console.log(des);
            return { link, title, description: des };
        }
    );
    const content = myrsscontent;
    return { title, content, description };
};
