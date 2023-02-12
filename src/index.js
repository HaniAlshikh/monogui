import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./scenes/auth/AuthContext";
import * as dotenv from 'dotenv'
import * as operation from "./operation/operation";

dotenv.config()
operation.init()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
