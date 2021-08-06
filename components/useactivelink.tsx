import { useRouter } from "next/router";
import { useMemo } from "react";

export function useactivelink(href: Partial<import("url").UrlObject>) {
    const router = useRouter();
    const { asPath } = router;
    const active = useMemo(() => {
        console.log(asPath, href.pathname, asPath === href.pathname);
        return asPath === href.pathname;
    }, [asPath, href.pathname]);
    return active;
}
