import { PropsWithChildren } from "react";
import Home from "../components/react-module-home";
const index = (props: PropsWithChildren<{}>) => {
    // console.log(props);
    return (
        <div>
            <Home></Home>
        </div>
    );
};
export default index;
