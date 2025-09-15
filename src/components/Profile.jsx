import React, { useState, useEffect } from "react";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("A short bio about yourself...");
  const [location, setLocation] = useState("Nairobi, Kenya");
  const [profilePic, setProfilePic] = useState(null);
  const [editing, setEditing] = useState(false);

  // Load saved profile data from localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setName(savedProfile.name || "John Doe");
      setBio(savedProfile.bio || "");
      setLocation(savedProfile.location || "");
      setProfilePic(savedProfile.profilePic || null);
    }
  }, []);

  // Handle image upload & preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Base64 preview
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove profile picture
  const handleRemoveImage = () => {
    setProfilePic(null);
  };

  // Save profile data to localStorage
  const handleSave = () => {
    const userProfile = {
      name,
      bio,
      location,
      profilePic,
    };
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    setEditing(false);
    alert("Profile updated & saved!");
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
            className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-700 object-cover"
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
            {/* Upload Profile Picture */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium">
                Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-1 block w-full text-sm text-gray-600 dark:text-gray-300 file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0 file:text-sm file:font-semibold
                  file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />

              {profilePic && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="mt-2 text-sm text-red-500 hover:text-red-700"
                >
                  Remove Picture
                </button>
              )}
            </div>

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
