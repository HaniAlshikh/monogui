import {CssBaseline, ThemeProvider} from "@mui/material";
import {useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Audit from "./scenes/audit/Audit";
import AuthContext from "./scenes/auth/AuthContext";
import Auth from "./scenes/auth/Auth";
import AuthPopup from "./scenes/auth/AuthPopup";
import {ColorModeContext, useMode} from "./theme";
import AuthSecure from "./scenes/auth/AuthSecuer";
import Content from "./scenes/global/Content";

// redirect_uri: import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT as string,
//     client_id: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID as string,

// This configuration use the ServiceWorker mode only
// "access_token" will be provided automaticaly to the urls and domains configured inside "OidcTrustedDomains.js"
// const configuration = {
//     client_id: 'interactive.public.short',
//     redirect_uri: window.location.origin + '/authentication/callback',
//     silent_redirect_uri: window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
//     scope: 'openid profile email api offline_access',
//     authority: 'https://demo.duendesoftware.com',
//     service_worker_relative_url: '/OidcServiceWorker.js',
//     service_worker_only: true,
// };

const config = {
    client_id: "gateway",
    redirect_uri: `${document.location.origin}/auth/callback`, // window.location.origin + '/authentication/callback',
    silent_redirect_uri: "http://localhost:3000/auth/silent-callback", // window.location.origin + '/authentication/silent-callback', // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
    scope: "openid profile email",
    authority: "http://dex:5556",
    // authority_configuration: {
    //     // Optional for providers that does not implement OIDC server auto discovery via a .wellknowurl
    //     // authorization_endpoint: ""
    //     // token_endpoint: PropTypes.string,
    //     // userinfo_endpoint: PropTypes.string,
    //     // end_session_endpoint: PropTypes.string,
    //     // revocation_endpoint: PropTypes.string,
    //     // check_session_iframe: PropTypes.string,
    // },
    service_worker_relative_url: "/OidcServiceWorker.js",
    service_worker_only: true,
};

// const oidcConfig = {
//     onSignIn: async (user: any) => {
//         alert('You just signed in, congratz! Check out the console!');
//         console.log(user);
//         window.location.hash = '';
//     },
//     authority: 'https://accounts.google.com',
//     clientId:
//         '1066073673387-undfdseanu1soilcdprq1p4m8gq8a1iu.apps.googleusercontent.com',
//     responseType: 'id_token',
//     redirectUri:
//         process.env.NODE_ENV === 'development'
//             ? 'http://localhost:3000/'
//             : 'https://cobraz.github.io/example-oidc-react',
// };

// const Home = () => {
//     const {data, loading, error, getAuth} = useAuth({
//         // authorizeUrl: "https://example.com/auth",
//         // clientId: "YOUR_CLIENT_ID",
//         redirectUri: `${document.location.origin}/auth/callback`,
//         // scope: "YOUR_SCOPES",
//         // responseType: "code",
//         // exchangeCodeForTokenServerURL: "https://your-backend/token",
//         // exchangeCodeForTokenMethod: "POST",
//         onSuccess: (payload) => console.log("Success", payload),
//         onError: (error_) => console.log("Error", error_)
//     });
//
//
//     const isLoggedIn = Boolean(data?.access_token); // or whatever...
//     console.log(`isLoggedIn: ${isLoggedIn}`)
//
//     if (isLoggedIn) {
//         return <pre>{JSON.stringify(data)}</pre>;
//     }
//
//     if (error) {
//         return <div>Error</div>;
//     }
//
//     if (loading) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <button style={{margin: "24px"}} type="button" onClick={() => getAuth()}>
//             Login Login
//         </button>
//     );
// };

function App() {
    const authCtx = useContext(AuthContext);
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Routes>
                    <Route
                        path="/"
                        element={
                            authCtx.isLoggedIn ? (
                                <Navigate to="/audit"/>
                            ) : (
                                <Auth redirectUri={config.redirect_uri}/>
                            )
                        }
                    />
                    <Route path="/auth/callback" element={<AuthPopup/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                    <Route element={<AuthSecure/>}>
                        <Route path="/audit" element={<Content><Audit/></Content>}/>
                    </Route>
                </Routes>
                {/*{!authCtx.isLoggedIn &&*/}
                {/*    <Routes>*/}
                {/*        <Route path="/" element={<Auth redirectUri={config.redirect_uri} />} />*/}
                {/*        <Route path="/auth/callback" element={<AuthPopup />} />*/}
                {/*        <Route path='*' element={<Navigate to='/' />} />*/}
                {/*    </Routes>*/}
                {/*}*/}
                {/*{!authCtx.isLoggedIn &&*/}
                {/*    <div className="app">*/}
                {/*        <Sidebar/>*/}
                {/*        <main className="content">*/}
                {/*            <Topbar/>*/}
                {/*            <Routes>*/}
                {/*                <Route path="/" element={<Navigate to='/audit' />} />*/}
                {/*                <Route path="/audit" element={<Audit />} />*/}
                {/*            </Routes>*/}
                {/*        </main>*/}
                {/*    </div>*/}
                {/*}*/}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
