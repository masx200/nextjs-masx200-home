import Link from "next/link";
import React, { memo, PropsWithChildren } from "react";
import { useactivelink } from "../useactivelink";
export const CustomRSSLink = memo(function CustomRSSLink({
    className = "",
    children,
    href,
    ...rest
}: PropsWithChildren<
    Record<string, any> & { className?: string; href: { pathname?: string } }
>) {
    const active = useactivelink(href);
    return (
        <Link
            href={href}
            className={[className, active && "active"]
                .filter(Boolean)
                .join(" ")}
            {...rest}
        >
            {children}
        </Link>
    );
});
