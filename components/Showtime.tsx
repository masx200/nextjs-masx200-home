"use strict";
import React, { useEffect, useState } from "react";
import { 获取当前时间 } from "./获取当前时间";

// function refreshall() {
//   $("#allnavbar").click();
// }
export function Showtime() {
    const [nowtime, setnowtime] = useState(获取当前时间());
    useEffect(function () {
        // refreshall();
        // document.title = "React router App-" + "about";
        let timer = setInterval(() => {
            setnowtime(获取当前时间());
        }, 1100);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <h2>现在是 {nowtime} </h2>;
}
