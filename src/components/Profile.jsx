import React, { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (savedUser) setUser(savedUser);
  }, []);

  const handleSave = () => {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setEditing(false);
    alert("Profile updated!");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePic" && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  if (!user) return <p className="text-center">Loading profile...</p>;

  return (
    <div className="max-w-2xl mx-auto relative">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        👤 My Profile
      </h2>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src={
              user.profilePic ||
              `https://api.dicebear.com/9.x/initials/svg?seed=${user.name}`
            }
            alt="avatar"
            className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {user.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
        </div>

        {editing ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300">
                Profile Picture
              </label>
              <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleChange}
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
          <button
            onClick={() => setEditing(true)}
            className="bg-gray-700 dark:bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
