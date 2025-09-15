import React, { useState } from "react";

const Auth = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, profilePic: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      // 🔑 LOGIN
      const existingUser = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (existingUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
        onAuthSuccess(existingUser);
      } else {
        alert("Invalid email or password");
      }
    } else {
      // 📝 SIGNUP
      if (users.find((u) => u.email === formData.email)) {
        alert("User already exists");
        return;
      }

      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        bio: "A short bio about yourself...",
        location: "Nairobi, Kenya",
        profilePic: formData.profilePic || null,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", JSON.stringify(newUser));
      onAuthSuccess(newUser);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              {/* Name */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>

              {/* Profile Picture */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium">
                  Profile Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePicUpload}
                  className="w-full mt-1"
                />
              </div>
            </>
          )}

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
