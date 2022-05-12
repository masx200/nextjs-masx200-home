"use strict";
import React, { memo, useEffect, useState } from "react";
import { 获取当前时间 } from "./获取当前时间";

export const Showtime = memo(function Showtime() {
    const [nowtime, setnowtime] = useState('Thu May 12 2022 19:23:20');
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
});
