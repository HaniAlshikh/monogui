import logo from "../../assets/m8.svg";
import loader from "../../assets/loader.svg";
import {Box, Button, Typography, useTheme} from "@mui/material";
import {useContext} from "react";
import AuthContext from "./AuthContext.jsx";
import {tokens} from "../../theme";
import ThemeButton from "../../components/global/ThemeButton";
import useAuth from "./useAuth.jsx";

const Auth = () => {
    const ctx = useContext(AuthContext)
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {loading, error, getAuth} = useAuth({
        ctx: ctx,
        onSuccess: (authInfo) => {
            console.log("Authentication succeeded", authInfo)
            ctx.login(authInfo)
        },
        onError: (error_) => console.log("Authentication failed", error_)
    });

    return <>
        <ThemeButton sx={{float: "right", p: 2}}/>
        <Box display="flex" height={"100%"} wedith={"100%"}
             justifyContent="center"
             alignItems="center">
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Box
                    component="img"
                    sx={{
                        pb: 2,
                        maxWidth: "60%",
                    }}
                    alt="m8-logo"
                    src={logo}
                />

                {ctx.isLoggedIn &&
                    <Typography variant="h5" color={colors.blueAccent.default}>
                        Authentication succeeded, you will be redirected soon. If not please refresh...
                    </Typography>
                }

                {error &&
                    <>
                        <Typography variant="h5"
                                    color={colors.red.default}>{`${error}`}</Typography>
                        <Typography variant="h6" color={colors.grey[80]}>
                            Please try again. If it keep happening please contact your administrator.
                        </Typography>
                    </>
                }

                {loading &&
                    <>
                        <Typography variant="h5" color={colors.primary.dark}>Wating for you to login...</Typography>
                        <Typography variant="h6" color={colors.grey[80]}>
                            Look for the popup, if you can't find it refresh and make sure popups are not blocked.
                        </Typography>
                        <Box component="img" sx={{maxWidth: "50%"}} alt="loader" src={loader}/>
                    </>
                }

                {!loading &&
                    <Button sx={{mt: 2}} variant="contained" size="large" color="m8bt" onClick={getAuth}>
                        Sign-in
                    </Button>}
            </Box>
        </Box>
    </>
}

export default Auth;