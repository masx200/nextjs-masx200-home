import { PropsWithChildren } from "react";

const index = (props: PropsWithChildren<{}>) => {
    console.log(props);
    return <div>index</div>;
};
export default index;
