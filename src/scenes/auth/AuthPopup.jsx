import {useEffect} from 'react';
import {queryToObject} from "../../util/window";
import {Box, Typography, useTheme} from "@mui/material";
import loader from "../../assets/loader.svg";
import {tokens} from "../../theme";
import {useNavigate} from "react-router-dom";

const POPUP_HEIGHT = 700;
const POPUP_WIDTH = 600;
const AUTH_STATE_KEY = 'react-use-auth-state-key';
const AUTH_RESPONSE = 'react-use-auth-response';
const DEFAULT_EXCHANGE_CODE_FOR_TOKEN_METHOD = 'POST';

const AuthPopup = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()

    // On mount
    useEffect(() => {
        const payload = {
            ...queryToObject(window.location.search.split('?')[1]),
            ...queryToObject(window.location.hash.split('#')[1]),
        };
        const state = payload?.state;
        const error = payload?.error;

        if (!window.opener) {
            navigate('/')
            console.error('Not a callback call');
            return
        }

        if (state) {
            window.opener.postMessage({
                type: AUTH_RESPONSE,
                payload,
            });
        }

        window.opener.postMessage({
            type: AUTH_RESPONSE,
            error: decodeURI(error) || 'An error has occured.',
        });
    }, []);

    return <Box display="flex" height={"100%"} wedith={"100%"}
                justifyContent="center"
                alignItems="center">
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Box component="img" sx={{pb: 2, maxWidth: "50%"}} alt="loader" src={loader}/>
            <Typography variant="h4" color={colors.blueAccent.default}>
                Authenticating...
            </Typography>
        </Box>
    </Box>
};

export default AuthPopup;