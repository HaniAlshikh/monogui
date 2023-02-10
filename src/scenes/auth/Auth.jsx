import logo from "../../assets/m8.svg";
import {Box, Button, Typography} from "@mui/material";
import useAuth from "../../usecases/auth/UseAuth";
import {useContext} from "react";
import AuthContext from "./AuthContext";

const Auth = (props) => {
    const {
        redirectUri,
    } = props;

    const authCtx = useContext(AuthContext)
    const {loading, error, getAuth} = useAuth({
        redirectUri: redirectUri,
        onSuccess: (authInfo) => {
            console.log("Authentication succeeded", authInfo)
            authCtx.login(authInfo)
        },
        onError: (error_) => console.log("Error", error_)
    });

    return <Box display="flex" height={"100%"} wedith={"100%"}
                justifyContent="center"
                alignItems="center">
        <Box maxWidth={"50%"}
             display="flex"
             justifyContent="center"
             alignItems="center"
             flexDirection="column">
            <Box
                component="img"
                sx={{
                    pb: 4,
                    maxWidth: "50%",
                    cursor: "pointer"
                }}
                alt="m8-logo"
                src={logo}
            />

            {!loading && <Button variant="contained" onClick={getAuth}>Sign-in</Button>}

            {error && <Typography>
                {`error... ${error}`}
            </Typography>}

            {loading && <Typography>
                Loading...
            </Typography>}

            {authCtx.isLoggedIn && <Typography>
                success redirecting...
            </Typography>}
        </Box>
    </Box>
}

export default Auth;