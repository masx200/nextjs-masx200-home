import { memo } from "react";
import Home from "../components/react-module-home";
const index = memo(() => {
    // console.log(props);
    return (
        <div>
            <Home></Home>
        </div>
    );
});
export default index;
