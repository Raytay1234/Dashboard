import React, { useState } from "react";

const Profile = ({ user, setUser }) => {
  const [name, setName] = useState(user?.name || "John Doe");
  const [bio, setBio] = useState(user?.bio || "A short bio about yourself...");
  const [location, setLocation] = useState(user?.location || "Nairobi, Kenya");
  const [profilePic, setProfilePic] = useState(user?.profilePic || null);
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      bio,
      location,
      profilePic,
    };

    setUser(updatedUser);
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    // Update in the users list too
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.map((u) =>
      u.email === updatedUser.email ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(users));

    setEditing(false);
    alert("Profile updated!");
  };

  const handlePicUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-2xl mx-auto relative z-0">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        👤 My Profile
      </h2>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-6 relative z-0">
        {/* Avatar */}
        <div className="flex items-center space-x-4">
          <img
            src={
              profilePic ||
              `https://api.dicebear.com/9.x/initials/svg?seed=${name}`
            }
            alt="avatar"
            className="w-20 h-20 rounded-full border-2 border-gray-300 dark:border-gray-700 object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{location}</p>
          </div>
        </div>

        {/* Editable fields */}
        {editing ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Upload new profile picture */}
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

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>
          </form>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Bio:</span> {bio}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Location:</span> {location}
            </p>
            <button
              onClick={() => setEditing(true)}
              className="bg-gray-700 dark:bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
