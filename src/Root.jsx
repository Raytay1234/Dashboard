import React from "react";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";

const Root = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default Root;
