// src/Root.jsx
import React, { useState, useEffect } from "react";
import App from "./App";
import Auth from "./context/Auth";

const Root = () => {
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return user ? (
    <App user={user} setUser={setUser} />
  ) : (
    <Auth
      onAuthSuccess={(newUser) => {
        localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        setUser(newUser);
      }}
    />
  );
};

export default Root;
