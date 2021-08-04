import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useToggle } from "ahooks";
import { 我的自定义导航链接 } from "./我的自定义导航链接";
import { useRouter } from "next/router";
import { navlinks } from "./navlinks";
function onload(call: () => void) {
    if (typeof window === "undefined") {
        return;
    }
    if (document.readyState === "complete") {
        Promise.resolve().then(() => {
            return call();
        });
    } else {
        window.addEventListener("load", () => {
            return call();
        },{once:true});
    }
}
async function loadclipboard() {
    const module = await import("clipboard");
    const ClipboardJS = module.default;
    new ClipboardJS(".btn").on("success", function (e) {
        // console.log(e);
        // console.info("Text:", e.text);
        e.clearSelection();
    });
}
const layout = ({ children }: PropsWithChildren<{}>) => {
    useEffect(() => {
        onload(loadclipboard);
    }, []);
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
    const [navheight, setnavheight] = useState(142);
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
        // document.title = "主页";
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
export interface Linktype {
    text: string;
    href: Partial<import("url").UrlObject>;
}
