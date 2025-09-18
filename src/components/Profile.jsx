import React, { useState, useEffect } from "react";
import { useAuth } from "../context/useAuth";

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setRole(user.role);
      setAvatar(user.avatar || null);
    }
  }, [user]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateProfile({ name, role, avatar });
    alert("Profile updated successfully!");
  };

  if (!user) return <p className="text-gray-700">No user logged in.</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="mb-4 flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Avatar
          </div>
        )}
        <input type="file" accept="image/*" onChange={handleAvatarChange} />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button
        onClick={handleSave}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
