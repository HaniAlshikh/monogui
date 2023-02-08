import {Route, Routes} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Audit from "./scenes/audit";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <Sidebar/>
                    <main className="content">
                        <Topbar/>
                        <Routes>
                            <Route path="/audit" element={<Audit/>}/>
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
