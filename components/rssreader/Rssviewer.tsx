import { memo, useEffect } from "react";
import { RSSDATA } from "./RSSDATA";
import { Rssdatarenderer } from "./Rssdatarenderer";

export const Rssviewer = memo(function Rssviewer({
    src,
    data,
}: {
    src: string;
    data: RSSDATA;
}) {
    useEffect(() => {
        // console.log("src", src);
    }, [src]);
    const rssfeedurl = src;

    const rssstatetitle = data?.title;
    const rssstatedescription = data?.description;
    const rssstate = data?.content;
    const link = data?.link;
    return (
        <>
            <header className="App-header">
                <Rssdatarenderer
                    rssstatedescription={rssstatedescription}
                    link={link}
                    data={data}
                    rssfeedurl={rssfeedurl}
                    rssstatetitle={rssstatetitle}
                    rssstate={rssstate}
                ></Rssdatarenderer>
            </header>
        </>
    );
});
