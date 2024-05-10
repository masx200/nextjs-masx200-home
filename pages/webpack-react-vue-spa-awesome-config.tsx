import { GetStaticProps } from "next";
import { memo } from "react";
import Home, {
  markurl,
} from "../components/home-react-webpack-react-vue-spa-awesome-config";
import { getrenderedmarkdown } from "../components/markdown-react/getrenderedmarkdown";
const reacthome = memo(({ markdown }: { markdown: string }) => {
  return <Home markdown={markdown}></Home>;
});
export default reacthome;

export const getStaticProps: GetStaticProps = async (context) => {
  // console.log(context);
  const markdown = await getrenderedmarkdown(markurl);
  return { /* revalidate: 86400,  */ props: { markdown } };
};
