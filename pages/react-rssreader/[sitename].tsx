import { GetStaticPaths, GetStaticProps } from "next";
import { memo } from "react";
import { getrss, Rssdata } from "../../components/rssreader/getrss";
import Rssreader, {
    rssfeedxml,
} from "../../components/rssreader/react-module-rssreader";
const rssreader = memo(
    ({ sitename, data }: { sitename?: string; data?: Rssdata }) => {
        return <Rssreader sitename={sitename} data={data} />;
    }
);
export type Staticresult = {
    sitename?: string;
    data?: Rssdata;
};
export type StaticParams = { sitename?: string };
export default rssreader;
export const getStaticProps: GetStaticProps<Staticresult, StaticParams> =
    async (context) => {
        // console.log(context);
        const sitename = context.params?.sitename;
        const src = sitename ? Reflect.get(rssfeedxml, sitename) : undefined;
        const data = src ? await getrss(src) : undefined;
        // console.log(sitename, data);
        return { revalidate: 3600, props: { sitename, data } };
    };
export const getStaticPaths: GetStaticPaths<{ sitename: string }> = () => {
    return {
        fallback: false,
        paths: Object.keys(rssfeedxml).map((k) => {
            return { params: { sitename: k } };
        }),
    };
};
