import { Linktype } from "./layout";

export const navlinks: Linktype[] = [
    { text: "关于next.js", href: { pathname: "/nextabout" } },
    { text: "关于REACT", href: { pathname: "/react-about" } },
    { text: "rss阅读器", href: { pathname: "/react-rssreader" } },
    { text: "基于REACT的主页", href: { pathname: "/react-home" } },

    { text: "圆周率计算多线程", href: { pathname: "/nextabout" } },
    { text: "花密网页版", href: { pathname: "/picalc" } },
    { text: "JSfuck-and-hieroglyphy-Decoder", href: { pathname: "/decoder" } },
    { text: "JSfuck-ENCODER", href: { pathname: "/jsfuck" } },
    { text: "hieroglyphy-ENCODER", href: { pathname: "/hieroglyphy" } },
    {
        text: "极速零配置的单页面 web 应用打包工具",
        href: { pathname: "/webpack-react-vue-spa-awesome-config" },
    },
    {
        text: "VScode的优秀扩展推荐",
        href: { pathname: "/excellent-vscode-extensions-for-javascript" },
    },
];
