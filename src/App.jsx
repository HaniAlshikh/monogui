import {CssBaseline, ThemeProvider} from "@mui/material";
import {useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Audit from "./scenes/audit/Audit";
import AuthContext from "./scenes/auth/AuthContext.jsx";
import Auth from "./scenes/auth/Auth";
import AuthPopup from "./scenes/auth/AuthPopup.jsx";
import {ColorModeContext, useMode} from "./theme";
import AuthSecure from "./scenes/auth/AuthSecuer";
import Content from "./scenes/global/Content";

function App() {
    const ctx = useContext(AuthContext);
    ctx.callbackUrl = `${document.location.origin}/auth/callback`
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Routes>
                    <Route path="/" element={ctx.isLoggedIn ? <Navigate to="/audit"/> : <Auth/>}/>
                    <Route path="/auth/callback" element={<AuthPopup/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                    <Route element={<AuthSecure/>}>
                        <Route path="/audit" element={<Content><Audit/></Content>}/>
                    </Route>
                </Routes>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
