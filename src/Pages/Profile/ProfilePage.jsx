import React, { useState, useEffect } from "react";
// import { useAuth } from "../../Context/AuthContext";
// import { doc, setDoc } from "firebase/firestore";
// import { storage, db } from "../../firebase"; // Make sure you have these imports
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ProfilePage = () => {
  // const { user, updateUserDetails } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  // State to store form values
  // const [username, setUsername] = useState(user?.displayName || "Enter your name");
  // const [email, setEmail] = useState(user?.email || "");
  // const [contactNumber, setContactNumber] = useState(user?.contactNumber || "Enter your mobile no.");
  // const [location, setLocation] = useState(user?.location || "Enter your location");
  // const [profilePicture, setProfilePicture] = useState(user?.photoURL || "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg");
  // const [about, setAbout] = useState(user?.about || "Enter something interesting about you");
  // const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [username, setUsername] = useState("Enter your name");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("Enter your mobile no.");
  const [location, setLocation] = useState("Enter your location");
  const [profilePicture, setProfilePicture] = useState( "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg");
  const [about, setAbout] = useState("Enter something interesting about you");

  // State to store original values for cancel functionality
  const [originalValues, setOriginalValues] = useState({});

  // const handleSave = async () => {
  //   let profilePictureURL = profilePicture;

  //   // Upload profile picture if a new one is selected
  //   if (profilePictureFile) {
  //     const storageRef = ref(storage, `profilePictures/${user.uid}`);
  //     await uploadBytes(storageRef, profilePictureFile);
  //     profilePictureURL = await getDownloadURL(storageRef);
  //   }

  //   const updatedDetails = {
  //     displayName: username,
  //     contactNumber,
  //     location,
  //     photoURL: profilePictureURL,
  //     about,
  //   };

  //   try {
  //     await setDoc(doc(db, "users", user.uid), updatedDetails, { merge: true });
  //     setIsEditing(false); // Exit editing mode after saving
  //   } catch (error) {
  //     console.error("Failed to update user details:", error);
  //   }
  // };

  // const handleProfilePictureUpload = (e) => {
  //   const file = e.target.files[0];
  //   setProfilePictureFile(file);
  //   const newProfilePictureURL = URL.createObjectURL(file);
  //   setProfilePicture(newProfilePictureURL);
  // };

  // const handleEditClick = () => {
  //   // Store original values
  //   setOriginalValues({
  //     username,
  //     contactNumber,
  //     location,
  //     about,
  //     profilePicture,
  //   });
  //   setUsername(""); // Clear input fields when entering edit mode
  //   setContactNumber("");
  //   setLocation("");
  //   setAbout("");
  //   setProfilePicture("https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg");
  //   setIsEditing(true);
  // };

  // const handleCancelClick = () => {
  //   // Reset to original values
  //   setUsername(originalValues.username);
  //   setContactNumber(originalValues.contactNumber);
  //   setLocation(originalValues.location);
  //   setAbout(originalValues.about);
  //   setProfilePicture(originalValues.profilePicture);
  //   setIsEditing(false); // Exit editing mode
  // };

  // if (!user) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={profilePicture}
                  className="w-32 h-32 object-cover aspect-square bg-gray-300 rounded-full mb-4 shrink-0"
                  alt={`${username}'s profile`}
                />
                {isEditing ? (
                  <>
                    <input
                      type="file"
                      // onChange={handleProfilePictureUpload}
                      className="mb-4 mx-auto"
                    />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="text-xl font-bold mb-2 border border-gray-300 rounded p-2 w-full"
                      placeholder="Enter your Username"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-gray-700 mb-2 border border-gray-300 rounded p-2 w-full"
                      disabled
                    />
                  </>
                ) : (
                  <>
                    <h1 className="text-xl font-bold">{username}</h1>
                    <p className="text-gray-700">{email}</p>
                  </>
                )}
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  {isEditing ? (
                    <>
                      <button
                        // onClick={handleSave}
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                      >
                        Save
                      </button>
                      <button
                        // onClick={handleCancelClick}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      // onClick={handleEditClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Edit Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              {isEditing ? (
                <textarea
                  value={about}
                  // onChange={(e) => setAbout(e.target.value)}
                  className="text-gray-700 mb-4 w-full border border-gray-300 rounded p-2"
                  placeholder="Enter something interesting about you !"
                />
              ) : (
                <p className="text-gray-700">{about}</p>
              )}

              <h2 className="text-xl font-bold mt-6 mb-4">Contact no.</h2>
              {isEditing ? (
                <input
                  type="text"
                  value={contactNumber}
                  // onChange={(e) => setContactNumber(e.target.value)}
                  className="text-gray-700 mb-4 w-full border border-gray-300 rounded p-2"
                  placeholder="Enter your mobile no."
                />
              ) : (
                <span className="text-gray-500 font-normal">{contactNumber}</span>
              )}

              <h2 className="text-xl font-bold mt-6 mb-4">Location</h2>
              {isEditing ? (
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-gray-700 mb-4 w-full border border-gray-300 rounded p-2"
                  placeholder="Enter your location"
                />
              ) : (
                <span className="text-gray-500 font-normal">{location}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
