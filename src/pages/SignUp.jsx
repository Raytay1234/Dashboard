import React, { useState } from "react";

const Signup = ({ onAuthSuccess, switchMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === email)) {
      alert("User already exists with this email.");
      return;
    }

    const newUser = { name, email, password, bio: "", location: "", profilePic: null };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    onAuthSuccess(newUser);
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Sign Up</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

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

      <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
        Sign Up
      </button>

      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        Already have an account?{" "}
        <button type="button" className="text-blue-600 hover:underline" onClick={switchMode}>
          Login
        </button>
      </p>
    </form>
  );
};

export default Signup;
