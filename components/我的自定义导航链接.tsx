import Link from "next/link";
import { memo } from "react";
import { Linktype } from "./Linktype";
import { useactivelink } from "./useactivelink";
export const 我的自定义导航链接 = memo(function 我的自定义导航链接({
    text,
    href,
}: Linktype) {
    const active = useactivelink(href);
    return (
        <Link href={href} passHref>
            <a
                className={[
                    "navbar-brand mui-btn mui-btn-primary mui-btn-outlined",
                    active && "active",
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                {text}
            </a>
        </Link>
    );
});
