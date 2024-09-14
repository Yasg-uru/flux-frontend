import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { MdPhotoCamera } from "react-icons/md";
import "./signup.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux-toolkit/slices/authSlice";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    roleWants: false,
    instaLink: "",
    LinkedInLink: "",
    profile: null, // To handle file input
  });
  const [profilePreview, setProfilePreview] = useState(null); // State for image preview

  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setSignupInfo((prev) => ({ ...prev, [name]: file }));
      setProfilePreview(URL.createObjectURL(file)); // Set the preview URL
    } else {
      setSignupInfo((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    dispatch(register(signupInfo))
      .unwrap()
      .then(() => {
        SignUpSuccessNotify();
      })
      .catch(() => {
        SignUpFailNotify();
      });
  };

  const SignUpSuccessNotify = () => {
    toast.success("Sign up Successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const SignUpFailNotify = () => {
    toast.error(
      "Failed to Sign up. Please check your credentials and try again.",
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );
  };

  return (
    <>
      <ToastContainer />
      <div className="signup-container py-24 pb-32">
        <div className="card">
          <div className="card_title">
            <h1>Create Account</h1>
          </div>
          <div className="form">
            <form onSubmit={handleSignup}>
              <div className="file-input-container">
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="file-input"
                  onChange={handleChange}
                />
                <label htmlFor="profile" className="file-input-label">
                  <MdPhotoCamera size={24} /> Choose Profile Picture
                </label>
                {profilePreview && (
                  <img
                    src={profilePreview}
                    alt="Profile Preview"
                    className="profile-preview"
                  />
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="font-medium"
                  value={signupInfo.name}
                  autoFocus
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  className="font-medium"
                  value={signupInfo.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  className="font-medium"
                  value={signupInfo.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="instaLink"
                  placeholder="Instagram Link (Optional)"
                  id="instaLink"
                  className="font-medium"
                  value={signupInfo.instaLink}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="LinkedInLink"
                  placeholder="LinkedIn Link (Optional)"
                  id="LinkedInLink"
                  className="font-medium"
                  value={signupInfo.LinkedInLink}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="roleWants"
                    checked={signupInfo.roleWants}
                    onChange={handleChange}
                  />
                  Role as Member
                </label>
              </div>
              <div>
                <button className="signupbtn font-medium" type="submit">
                  {loading ? "...Loading" : "Sign Up"}
                </button>
              </div>
              <br />
              <div>
                <span className="font-normal py-4">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium">
                    Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
