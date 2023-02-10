import {useCallback, useRef, useState} from 'react';
import {M8Auth, M8GetToken} from "./M8Auth";

const POPUP_HEIGHT = 700;
const POPUP_WIDTH = 600;
const AUTH_STATE_KEY = 'react-use-auth-state-key';
const AUTH_RESPONSE = 'react-use-auth-response';

const saveState = (state: string) => {
    sessionStorage.setItem(AUTH_STATE_KEY, state);
};

const removeState = () => {
    sessionStorage.removeItem(AUTH_STATE_KEY);
};

const openPopup = (url: string) => {
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

const closePopup = (popupRef: React.MutableRefObject<Window | null | undefined>) => {
    popupRef.current?.close();
};

const cleanup = (
    intervalRef: React.MutableRefObject<any>,
    popupRef: React.MutableRefObject<Window | null | undefined>,
    handleMessageListener: any
) => {
    clearInterval(intervalRef.current);
    closePopup(popupRef);
    // removeState();
    window.removeEventListener('message', handleMessageListener);
};

const useAuth = (props: Oauth2Props) => {
    const {
        redirectUri,
        onSuccess,
        onError,
    } = props;

    const popupRef = useRef();
    const intervalRef = useRef();
    const [{loading, error}, setUI] = useState({loading: false, error: null});

    const getAuth = useCallback(() => {
        setUI({
            loading: true,
            error: null,
        });

        let r = M8Auth(props)
        r.then((res) => {
            saveState(res.getState());
            // 3. Open popup
            popupRef.current = openPopup(res.getUpstreamIdpRedirect());
        })

        async function handleMessageListener(message: MessageEvent<any>) {
            console.log(message)
            const type = message?.data?.type;
            if (type !== AUTH_RESPONSE) {
                return;
            }
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
                    const response = M8GetToken(payload)
                    await response.then(res => {
                        payload = {
                            "username": res.getUsername(),
                            "accessToken": res.getAccessToken(),
                            "expiry": res.getExpiry().toDate()
                        }
                    })
                    setUI({
                        loading: false,
                        error: null,
                    });
                    if (onSuccess) {
                        await onSuccess(payload);
                    }
                }
            } catch (genericError) {
                console.error(genericError);
                setUI({
                    loading: false,
                    error: genericError.toString(),
                });
            } finally {
                cleanup(intervalRef, popupRef, handleMessageListener);
            }
        }

        window.addEventListener('message', handleMessageListener);
        intervalRef.current = setInterval(() => {
            const popupClosed = !popupRef.current?.window || popupRef.current?.window?.closed;
            if (popupClosed) {
                setUI((ui) => ({
                    ...ui,
                    loading: false,
                }));
                console.warn('Warning: Popup was closed before completing authentication.');
                clearInterval(intervalRef.current);
                removeState();
                window.removeEventListener('message', handleMessageListener);
            }
        }, 250);

        return () => {
            window.removeEventListener('message', handleMessageListener);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [
        redirectUri,
        onSuccess,
        onError,
        setUI,
    ]);

    return {loading, error, getAuth};
};

export default useAuth;