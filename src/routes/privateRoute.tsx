import {Navigate, Outlet} from "react-router-dom";
import Login from "../auth/login";

const PrivateRoute = () => {
    const auth = true;
    return (
        auth ? <Outlet/> : <Navigate to={"/login"}/>
    );
};

export default PrivateRoute;