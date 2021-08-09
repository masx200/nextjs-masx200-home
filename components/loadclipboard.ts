export async function loadclipboard() {
    const module = await import("clipboard");
    const ClipboardJS = module.default;
    new ClipboardJS(".btn").on("success", function (e) {
        // console.log(e);
        // console.info("Text:", e.text);
        e.clearSelection();
    });
}
