import React, { useState } from "react";

const Settings = () => {
  // Profile
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null); // store uploaded image

  // Preferences
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Save Profile
  const handleSaveProfile = () => {
    alert(`✅ Profile saved!\nUsername: ${username}\nEmail: ${email}`);
    setPassword("");
  };

  // Save Preferences
  const handleSavePreferences = () => {
    alert(
      `✅ Preferences saved!\nDark Mode: ${
        darkMode ? "On" : "Off"
      }\nNotifications: ${notifications ? "Enabled" : "Disabled"}`
    );
  };

  // Delete Account
  const handleDeleteAccount = () => {
    if (window.confirm("⚠️ Are you sure you want to delete your account?")) {
      alert("❌ Account deleted!");
    }
  };

  // Handle Profile Pic Upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // preview
    }
  };

  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-gray-900">Settings</h2>

      {/* Profile Section */}
      <section className="bg-white shadow-sm border rounded-2xl p-8 max-w-2xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Profile</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveProfile();
          }}
          className="space-y-6"
        >
          {/* Profile Picture */}
          <div className="flex items-center space-x-6">
            <img
              src={
                profilePic ||
                "https://www.gravatar.com/avatar/?d=mp&s=100" // fallback avatar
              }
              alt="Profile"
              className="w-20 h-20 rounded-full border object-cover"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="text-sm text-gray-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Change Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Save Profile
            </button>
          </div>
        </form>
      </section>

      {/* Preferences Section */}
      <section className="bg-white shadow-sm border rounded-2xl p-8 max-w-2xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Preferences
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSavePreferences();
          }}
          className="space-y-5"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Dark Mode</span>
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                darkMode ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  darkMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <button
              type="button"
              onClick={() => setNotifications(!notifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                notifications ? "bg-green-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  notifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition font-medium"
            >
              Save Preferences
            </button>
          </div>
        </form>
      </section>

      {/* Danger Zone */}
      <section className="bg-white shadow-sm border border-red-300 rounded-2xl p-8 max-w-2xl">
        <h3 className="text-lg font-semibold text-red-600 mb-4">
          Danger Zone
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Deleting your account is <strong>irreversible</strong>. Please be
          certain before proceeding.
        </p>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition font-medium"
        >
          Delete Account
        </button>
      </section>
    </div>
  );
};

export default Settings;
