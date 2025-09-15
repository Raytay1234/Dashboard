import React, { useState } from "react";

const Login = ({ onAuthSuccess, switchMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Get stored users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email && user.password === password);

    if (existingUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
      onAuthSuccess(existingUser);
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Login</h2>
      
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Login
      </button>

      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        Don’t have an account?{" "}
        <button type="button" className="text-blue-600 hover:underline" onClick={switchMode}>
          Sign up
        </button>
      </p>
    </form>
  );
};

export default Login;
