import {useCallback, useRef, useState} from 'react';
import AuthUseCase from "../../usecases/auth/auth.js";

const POPUP_HEIGHT = 700;
const POPUP_WIDTH = 600;
const AUTH_STATE_KEY = 'react-use-auth-state-key';
const AUTH_RESPONSE = 'react-use-auth-response';

const saveState = (state) => {
    sessionStorage.setItem(AUTH_STATE_KEY, state);
};

const removeState = () => {
    sessionStorage.removeItem(AUTH_STATE_KEY);
};

const openPopup = (url) => {
    // To fix issues with window.screen in multi-monitor setups, the easier option is to
    // center the pop-up over the parent window.
    const top = window.outerHeight / 2 + window.screenY - POPUP_HEIGHT / 2;
    const left = window.outerWidth / 2 + window.screenX - POPUP_WIDTH / 2;
    return window.open(
        url,
        'OAuth2 Popup',
        `height=${POPUP_HEIGHT},width=${POPUP_WIDTH},top=${top},left=${left}`
    );
};

const closePopup = (popupRef) => {
    popupRef.current?.close();
};

const cleanup = (intervalRef, popupRef, handleMessageListener) => {
    clearInterval(intervalRef?.current);
    closePopup(popupRef);
    removeState();
    window.removeEventListener('message', handleMessageListener);
};

const useAuth = (props) => {
    const {
        ctx,
        onSuccess,
        onError,
    } = props;

    const popupRef = useRef();
    const intervalRef = useRef();
    const authUseCase = useRef()
    const [{loading, error}, setUI] = useState({loading: false, error: null});

    const getAuth = useCallback(() => {
        setUI({
            loading: true,
            error: null,
        });

        let handleMessageListener
        const codePromise = new Promise((resolve, reject) => {
            handleMessageListener = async message => {
                // console.log(message)
                const type = message?.data?.type;
                if (type !== AUTH_RESPONSE)
                    return
                console.log(message)

                try {
                    const errorMaybe = message?.data?.error;
                    if (errorMaybe) {
                        setUI({
                            loading: false,
                            error: errorMaybe || 'Unknown Error',
                        });
                        if (onError) await onError(errorMaybe);
                    } else {
                        let payload = message?.data?.payload;
                        resolve(payload)
                        setUI({
                            loading: false,
                            error: null,
                        });
                    }
                } catch (genericError) {
                    console.error(genericError);
                    setUI({
                        loading: false,
                        error: genericError.toString(),
                    });
                    reject(genericError.toString())
                } finally {
                    cleanup(intervalRef, popupRef, handleMessageListener);
                }
            }
        })

        authUseCase.current = new AuthUseCase(
            upstreamIdpRedirect => {
                popupRef.current = openPopup(upstreamIdpRedirect)
                return codePromise
            },
            onSuccess,
        )

        window.addEventListener('message', handleMessageListener);
        intervalRef.current = setInterval(() => {
            const popupClosed = !popupRef.current?.window || popupRef.current?.window?.closed;
            if (popupClosed) {
                console.warn('Popup was closed before completing authentication.');
                setUI((ui) => ({
                    error: ui?.error || "Please wait for the authentication flow to finish. You will be automatically redirected.",
                    loading: false,
                }));
                cleanup(intervalRef, popupRef, handleMessageListener);
            }
        }, 250);

        authUseCase.current.run(ctx)

        return () => {
            cleanup(intervalRef, null, handleMessageListener())
        };
    }, [ctx, onSuccess, onError, setUI]);

    return {loading, error, getAuth};
};

export default useAuth;