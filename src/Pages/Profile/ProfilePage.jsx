import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Getting user info from Redux state
  const { user } = useSelector((state) => state.auth);

  const handleEditClick = () => setIsEditing(true);
  const handleCancelClick = () => setIsEditing(false);
  const handleSave = () => {
    // Save logic here
    setIsEditing(false);
  };
  const navigate=useNavigate();
if(!user){
  navigate("/login");
}
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          {/* Profile Info Section */}
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={user.profile || "default-profile-pic.jpg"}
                  className="w-32 h-32 object-cover bg-gray-300 rounded-full mb-4"
                  alt={`${user.name}'s profile`}
                />
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={user.name}
                      className="text-xl font-bold mb-2 border border-gray-300 rounded p-2 w-full"
                      readOnly
                    />
                    <input
                      type="email"
                      value={user.email}
                      className="text-gray-700 mb-2 border border-gray-300 rounded p-2 w-full"
                      readOnly
                    />
                  </>
                ) : (
                  <>
                    <h1 className="text-xl font-bold">{user.name}</h1>
                    <p className="text-gray-700">{user.email}</p>
                  </>
                )}
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  {isEditing ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelClick}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={handleEditClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Edit Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Social Links</h2>
              <p className="text-gray-700 mb-2">
                LinkedIn: {user.membersocialLinks?.linkedIn || "N/A"}
              </p>
              <p className="text-gray-700 mb-2">
                Instagram: {user.membersocialLinks?.instagram || "N/A"}
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4">Joined On</h2>
              <p className="text-gray-500">
                {new Date(user.membersocialLinks?.datejoined).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
