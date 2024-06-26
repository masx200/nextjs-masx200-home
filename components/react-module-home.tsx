//@ts-ignore
//@ts-ignore
import Head from "next/head";
import React, { memo } from "react";
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
import { Showtime } from "./Showtime";
//@ts-ignore
// import { 调整导航栏和主体的距离 } from "../src/调整导航栏和主体的距离.js";
"use strict";
export default memo(function home() {
    return homeeles;
});
const showprimary = () => {
    tanchu弹出消息通用("primary");
};
const showdanger = () => {
    tanchu弹出消息通用("danger");
};
const showsuccess = () => {
    tanchu弹出消息通用("success");
};
const showwarning = () => {
    tanchu弹出消息通用("warning");
};
const homeeles = (
    <>
        <Head>
            <title>{"next.js App-" + "home"}</title>
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
                    <p>
                        <a
                            className="mui-btn mui-btn-primary mui-btn-outlined"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://weibo.com/2174458781?"
                        >
                            一生忽而得一夏当司掌好年华的微博
                        </a>
                    </p>
                    <div>
                        <ul>
                            {首页推荐网址目录.map((t: string[], i: number) => {
                                return (
                                    <li key={i}>
                                        <p>
                                            <b>
                                                <a
                                                    className={"mui-btn mui-btn-primary mui-btn-outlined"}
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
                            })}
                        </ul>
                    </div>

                    <div>
                        <button
                            className="btn btn-outline-primary btn-lg"
                            //   ref={mybuttonidsbuttonid1}
                            onClick={showprimary}
                        >
                            弹出首选提示框
                        </button>
                        <button
                            className="btn btn-outline-success btn-lg"
                            //   ref={mybuttonidsbuttonid2}
                            onClick={showsuccess}
                        >
                            弹出成功提示框
                        </button>
                        <button
                            className="btn btn-outline-danger btn-lg"
                            //   ref={mybuttonidsbuttonid3}
                            onClick={showdanger}
                        >
                            弹出失败提示框
                        </button>
                        <button
                            className="btn btn-outline-warning btn-lg"
                            //   ref={mybuttonidsbuttonid4}
                            onClick={showwarning}
                        >
                            弹出警告提示框
                        </button>
                    </div>
                </div>

                <Showtime />
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
            <div className="图片列表200">
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
