import {useEffect} from 'react';
import {queryToObject} from "../../util/window";
import {Box} from "@mui/material";

const POPUP_HEIGHT = 700;
const POPUP_WIDTH = 600;
const AUTH_STATE_KEY = 'react-use-auth-state-key';
const AUTH_RESPONSE = 'react-use-auth-response';
const DEFAULT_EXCHANGE_CODE_FOR_TOKEN_METHOD = 'POST';

const checkState = (receivedState: string) => {
    const state = sessionStorage.getItem(AUTH_STATE_KEY);
    return state === receivedState;
};

const AuthPopup = () => {
    // On mount
    useEffect(() => {
        const payload = {
            ...queryToObject(window.location.search.split('?')[1]),
            ...queryToObject(window.location.hash.split('#')[1]),
        };
        const state = payload?.state;
        const error = payload?.error;

        if (!window.opener) {
            throw new Error('No window opener');
        }

        if (error) {
            window.opener.postMessage({
                type: AUTH_RESPONSE,
                error: decodeURI(error) || 'OAuth error: An error has occured.',
            });
        } else if (state && checkState(state)) {
            window.opener.postMessage({
                type: AUTH_RESPONSE,
                payload,
            });
        } else {
            window.opener.postMessage({
                type: AUTH_RESPONSE,
                error: 'OAuth error: State mismatch.',
            });
        }
    }, []);

    return <Box>
        Authenticating...
    </Box>
};

export default AuthPopup;