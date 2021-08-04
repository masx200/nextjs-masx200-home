//@ts-ignore
//@ts-ignore
import Head from "next/head";
import React, { useEffect, useState } from "react";
//@ts-ignore
import picture1 from "../src/pictures/babeljs.png";
//@ts-ignore
import picture3 from "../src/pictures/bootstrap.png";
//@ts-ignore
import picture4 from "../src/pictures/logo-jquery.png";
//@ts-ignore
import picture2 from "../src/pictures/parcel.jpg";
//@ts-ignore
import picture5 from "../src/pictures/react.svg";
//@ts-ignore
import picture6 from "../src/pictures/vue.png";
//@ts-ignore
import picture7 from "../src/pictures/webpack.svg";
//@ts-ignore
import tanchu弹出消息通用 from "../src/utils/my弹出消息通用";
import 首页推荐网址目录 from "../src/首页推荐网址目录";
//@ts-ignore
// import { 调整导航栏和主体的距离 } from "../src/调整导航栏和主体的距离.js";
("use strict");
export default function home() {
    const [nowtime, setnowtime] = useState(获取当前时间());
    useEffect(() => {
        // location.hash = "";
        // 调整导航栏和主体的距离();
        // document.title = "React router App-" + "home";
        let timer = setInterval(() => {
            setnowtime(获取当前时间());
        }, 1100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <Head>
                <title>{"React router App-" + "home"}</title>
            </Head>
            <div className="App">
                <header className="">
                    <div
                        className="jumbotron"
                        style={{
                            padding: 0,
                        }}
                    >
                        <h1>欢迎登陆页面！</h1>

                        <div>
                            <ul>
                                {首页推荐网址目录.map(
                                    (t: string[], i: number) => {
                                        return (
                                            <li key={i}>
                                                <p>
                                                    <b>
                                                        <a
                                                            className={
                                                                "mui-btn mui-btn-primary mui-btn-outlined"
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href={t[0]}
                                                        >
                                                            {t[1]}
                                                        </a>
                                                    </b>
                                                </p>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>

                        <div>
                            <button
                                className="btn btn-outline-primary btn-lg"
                                //   ref={mybuttonidsbuttonid1}
                                onClick={() => {
                                    tanchu弹出消息通用("primary");
                                }}
                            >
                                弹出首选提示框
                            </button>
                            <button
                                className="btn btn-outline-success btn-lg"
                                //   ref={mybuttonidsbuttonid2}
                                onClick={() => {
                                    tanchu弹出消息通用("success");
                                }}
                            >
                                弹出成功提示框
                            </button>
                            <button
                                className="btn btn-outline-danger btn-lg"
                                //   ref={mybuttonidsbuttonid3}
                                onClick={() => {
                                    tanchu弹出消息通用("danger");
                                }}
                            >
                                弹出失败提示框
                            </button>
                            <button
                                className="btn btn-outline-warning btn-lg"
                                //   ref={mybuttonidsbuttonid4}
                                onClick={() => {
                                    tanchu弹出消息通用("warning");
                                }}
                            >
                                弹出警告提示框
                            </button>
                        </div>
                    </div>

                    <h2>现在是 {nowtime}</h2>
                    <p>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://zh-hans.reactjs.org/tutorial/tutorial.html"
                        >
                            入门教程: 认识 React – React
                        </a>
                    </p>
                    <p>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://zh-hans.reactjs.org/docs/getting-started.html"
                        >
                            开始 – React文档
                        </a>
                    </p>
                    <h1>react-router测试</h1>
                    <h1>Hello, world!</h1>
                    <h2>欢迎来到主页</h2>

                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <h1>Hello, world!</h1>
                </header>
                <div id="图片列表200">
                    <hr />
                    <img loading="lazy" src={picture1.src} />
                    <hr />
                    <img loading="lazy" src={picture2.src} />
                    <hr />
                    <img loading="lazy" src={picture3.src} />
                    <hr />
                    <img loading="lazy" src={picture4.src} />
                    <hr />
                    <img loading="lazy" src={picture5.src} />
                    <hr />
                    <img loading="lazy" src={picture6.src} />
                    <hr />
                    <img loading="lazy" src={picture7.src} />
                </div>
            </div>
        </>
    );
}
function 获取当前时间() {
    return new Date().toString().slice(0, new Date().toString().indexOf("GMT"));
}
