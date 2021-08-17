import { navlinks } from "./navlinks";
import { 我的自定义导航链接 } from "./我的自定义导航链接";

export const navlinkeles = navlinks.map(({ text, href }, index) => {
    return (
        <li key={index}>
            <我的自定义导航链接 href={href} text={text} />
        </li>
    );
});
