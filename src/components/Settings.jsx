import React, { useState } from "react";

const Settings = () => {
  // Profile
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");

  // Preferences
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Handle save profile
  const handleSaveProfile = () => {
    alert(`✅ Profile saved!\nUsername: ${username}\nEmail: ${email}`);
    setPassword(""); // clear password field
  };

  // Handle save preferences
  const handleSavePreferences = () => {
    alert(
      `✅ Preferences saved!\nDark Mode: ${
        darkMode ? "On" : "Off"
      }\nNotifications: ${notifications ? "Enabled" : "Disabled"}`
    );
  };

  // Handle delete account
  const handleDeleteAccount = () => {
    if (window.confirm("⚠️ Are you sure you want to delete your account?")) {
      alert("❌ Account deleted!");
    }
  };

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold text-gray-800">⚙️ Settings</h2>

      {/* Profile Section */}
      <section className="bg-white shadow rounded-xl p-6 max-w-2xl">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveProfile();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Change Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Save Profile
          </button>
        </form>
      </section>

      {/* Preferences Section */}
      <section className="bg-white shadow rounded-xl p-6 max-w-2xl">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Preferences</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSavePreferences();
          }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="w-5 h-5"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Save Preferences
          </button>
        </form>
      </section>

      {/* Danger Zone */}
      <section className="bg-white shadow rounded-xl p-6 max-w-2xl border border-red-300">
        <h3 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h3>
        <p className="text-gray-600 mb-4">
          Deleting your account is irreversible. Please be certain.
        </p>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Delete Account
        </button>
      </section>
    </div>
  );
};

export default Settings;
