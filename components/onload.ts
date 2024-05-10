export function onload(call: () => void) {
    if (typeof window === "undefined") {
        return;
    }
    if (document.readyState === "complete") {
        Promise.resolve().then(() => {
            return call();
        });
    } else {
        window.addEventListener(
            "load",
            () => {
                return call();
            },
            { once: true },
        );
    }
}
