import React, { useState } from "react";

const Settings = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("john@example.com");

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">⚙️ Settings</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="space-y-6 bg-white shadow rounded-xl p-6 max-w-lg"
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

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
