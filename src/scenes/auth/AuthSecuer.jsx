import {useContext} from "react";
import AuthContext from "./AuthContext.jsx";
import {Navigate, Outlet} from "react-router-dom";


const AuthSecure = () => {
    const authCtx = useContext(AuthContext)
    return authCtx.isLoggedIn ? <Outlet /> : <Navigate to='/' />
}

export default AuthSecure