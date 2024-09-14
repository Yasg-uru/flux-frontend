import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

// import { useAuth } from "../../Context/AuthContext";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux-toolkit/slices/authSlice";

const Login = () => {
  const LoginSuccessNotify = () => {
    toast.success("Login Successfull!", {
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
  const LoginFailNotify = () => {
    toast.error(
      "Failed to login. Please check your credentials and try again.",
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
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(loginInfo)).unwrap()
      .then(() => {
       toast.success("loggedin successfull")
        navigate("/");
      })
      .catch((error) => {
        toast.error("Failed to login ");
      });
  };
  return (
    <>
      <div className="login-container">
        <ToastContainer />

        <div className="card">
          <div className="card_title text-black">
            <h1>Login</h1>
          </div>
          <div className="form">
            <form onSubmit={handleLogin}>
              <div>
                {" "}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  className="font-medium"
                  value={loginInfo.email}
                  autoFocus
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
                  value={loginInfo.password}
                  autoFocus
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className="signupbtn mb-2 font-medium">
                  {loading ? "...Loading" : "Login"}
                </button>
              </div>
              <br />
              <div>
                <span className="font-normal">
                  Don't have an account?{" "}
                  <Link to="/signup" className="font-normal">
                    Sign up
                  </Link>
                </span>
              </div>
            </form>

            <p>
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
