import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./scenes/auth/AuthContext.jsx";
import * as operation from "./operation/operation";


const root = ReactDOM.createRoot(document.getElementById("root"));
operation.init()
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
