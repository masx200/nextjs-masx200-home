"use strict";
import React, { useState } from "react";

export function useBindtext(
    默认值: string,
): [
    string,
    React.Dispatch<React.SetStateAction<string>>,
    (e: { target: { value: string } }) => void,
] {
    var [inputcode, setinputcode] = useState(String(默认值));
    const inputonchange = (e: { target: { value: string } }) => {
        //@ts-ignore
        setinputcode(e.target?.value);
    };
    return [inputcode, setinputcode, inputonchange];
}
