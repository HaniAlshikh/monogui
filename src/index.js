import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import {AuthContextProvider} from "./scenes/auth/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
          <BrowserRouter>
              <AuthContextProvider>

              <ProSidebarProvider>
                  <App />
              </ProSidebarProvider>
              </AuthContextProvider>

          </BrowserRouter>
  </React.StrictMode>
);
