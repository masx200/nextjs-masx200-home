import Link from "next/link";
import { Linktype } from "./layout";

export function 我的自定义导航链接({ text, href }: Linktype) {
    return (
        <Link href={href} passHref>
            <a className="navbar-brand mui-btn mui-btn-primary mui-btn-outlined">
                {text}
            </a>
        </Link>
    );
}
