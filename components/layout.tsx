import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useToggle } from "ahooks";
import { 我的自定义导航链接 } from "./我的自定义导航链接";
import { useRouter } from "next/router";

const layout = ({ children }: PropsWithChildren<{}>) => {
    const navele = useRef<Element>();
    const observer = useRef<ResizeObserver>();
    function createobserver() {
        observer.current =
            observer.current ||
            new ResizeObserver((entry) => {
                // console.log(entry);
                const height = navele.current?.clientHeight;
                height && setnavheight(height);
            });
    }
    useEffect(() => {
        createobserver();
    }, []);
    const [navheight, setnavheight] = useState(100);
    const router = useRouter();

    const [state, { toggle }] = useToggle(true);
    useEffect(() => {
        shouqi收起折叠的导航栏菜单();
    }, [router.pathname, router.query]);
    useEffect(() => {
        // console.log("onmounted");

        if (document.body.clientWidth <= 500) {
            shouqi收起折叠的导航栏菜单();
        }

        // @ts-ignore
        // 调整导航栏和主体的距离();
        document.title = "主页";
    }, []);

    function shouqi收起折叠的导航栏菜单() {
        if (window.innerWidth <= 500) {
            toggle(false);
        }

        scrollTo(0, 0);
    }
    function navbarref(e?: Element | null) {
        if (e) {
            createobserver();
            observer.current?.observe(e);
            navele.current = e;
        }
    }
    return (
        <div>
            <div
                className="container-fluid fixed-top"
                id="my导航栏"
                ref={navbarref}
            >
                <nav
                    className="navbar navbar-default navbar navbar-expand-sm bg-light navbar-light"
                    role="navigation"
                >
                    <div>
                        <我的自定义导航链接
                            href={{ pathname: "/" }}
                            text="主页"
                        />
                    </div>
                    <button
                        style={{ display: "block" }}
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        onClick={() => {
                            toggle();
                        }}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div style={{ display: state ? "block" : "none" }}>
                        <ul
                            className="nav navbar-nav"
                            id="allnavbar"
                            onClick={() => {
                                shouqi收起折叠的导航栏菜单();
                            }}
                        >
                            {navlinks.map(({ text, href }, index) => {
                                return (
                                    <li key={index}>
                                        <我的自定义导航链接
                                            href={href}
                                            text={text}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </div>

            <div
                className="container"
                id="my主体"
                style={{ paddingTop: navheight + "px" }}
            >
                {children}
            </div>
        </div>
    );
};
export default layout;
const navlinks: Linktype[] = [
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
export interface Linktype {
    text: string;
    href: Partial<import("url").UrlObject>;
}
