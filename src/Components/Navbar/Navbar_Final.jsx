import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";

import logo from "../../assets/Logo/logo.png";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Btn1 from "../Buttons/Btn1/Btn1";
import Btn2 from "../Buttons/Btn2/Btn2";
// import { useAuth } from "../../Context/AuthContext";
// import Btn2 from "../Buttons/Btn2/Btn2";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux-toolkit/slices/authSlice";

const NavbarFinal = () => {
  // ---------- TOAST FUNCTION ------------
  const LogoutSuccessNotify = () => {
    toast.success("Logout Successfully", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const LogoutFailNotify = () => {
    toast.error("Failed to logout. Please try again.", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // ------- USER & LOGOUT --------------
  // const { user, logout } = useAuth();
  const location = useLocation();

  // ----------- LOGOUT FUNCTION -------

  // const [products, setProducts] = useState("");
  const navigate = useNavigate();

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = async (e) => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success(" logout successful");
        navigate("/login");
      })
      .catch(() => {
        toast.error("failed to logout");
      });

   
  };
  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     LogoutSuccessNotify();
  //   } catch (error) {
  //     LogoutFailNotify();
  //     console.error("Failed to logout", error);
  //   }
  // };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const mediaSize = 991;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle("hidden-scrolling");
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.classList.remove("hidden-scrolling");
  };

  const handleMenuItemClick = (event) => {
    if (
      event.target.getAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;

      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        if (document.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  };

  const collapseSubMenu = () => {
    const activeSubMenu = document.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    if (activeSubMenu) {
      activeSubMenu.removeAttribute("style");
    }
    const activeMenuItem = document.querySelector(
      ".menu-item-has-children.active"
    );
    if (activeMenuItem) {
      activeMenuItem.classList.remove("active");
    }
  };

  const resizeFix = () => {
    if (isNavOpen) {
      toggleNav();
    }
    if (document.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  };

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });

  // Close navbar on route change
  useEffect(() => {
    closeNav();
  }, [location]);

  // ------------ HIDING NAVBAR ON SCROLL DOWN ------------
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {/* <ToastContainer /> */}
      <section className={visible ? "visible" : "hidden"}>
        <header className="header ">
          <div className="nav-container ">
            <div className="header-main sm:px-6 px-0 ">
              <div className="logo sm:-ml-0 ml-0 ">
                <Link to="/" className="flex flex-row items-center">
                  <img
                    src={logo}
                    alt=""
                    className="sm:w-[6vw] w-[25vw] sm:pr-2 max-md:px-2 max-md:pl-3  "
                  />
                  <h1 className="sm:text-xl text-lg text-[#000] w-full">
                    Technical Club
                  </h1>
                </Link>
              </div>
              <div
                className={`open-nav-menu ${isNavOpen ? "active" : ""}`}
                onClick={toggleNav}
              >
                <span></span>
              </div>
              <div
                className={`menu-overlay ${isNavOpen ? "active" : ""}`}
                onClick={closeNav}
              ></div>
              {/* <!-- navigation menu start --> */}
              <nav className={`nav-menu ${isNavOpen ? "open" : ""}`}>
                <div className="close-nav-menu " onClick={closeNav}>
                  X
                </div>
                <ul className="menu">
                  <li
                    className="menu-item "
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="100"
                  >
                    <Link to="/">
                      <div className="flex gap-1 items-center effect-underline ">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="home"></ion-icon>
                        </p>
                        Home
                      </div>
                    </Link>
                  </li>

                  {/* <div                   
                    className="menu-item menu-item-has-children"
                    onClick={handleMenuItemClick}
                  >
                    <a href="#" data-toggle="sub-menu">
                      <div
                        className="flex gap-1 items-center"
                        data-toggle="sub-menu"
                      >
                        <p className="pt-1">
                          <ion-icon name="bag-remove"></ion-icon>
                        </p>
                        Category <i className="plus mt-1"></i>
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="#">
                          <div className="flex gap-1 items-center">
                            <p className="pt-1">
                              {" "}
                              <ion-icon name="pizza-outline"></ion-icon>
                            </p>
                            Pizza
                          </div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#">
                          <div className="flex gap-1 items-center">
                            <p className="pt-1">
                              <ion-icon name="beer-outline"></ion-icon>
                            </p>
                            Cold drink
                          </div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#">
                          <div className="flex gap-1 items-center">
                            <p className="pt-1">
                              <ion-icon name="fast-food-outline"></ion-icon>
                            </p>
                            Burger
                          </div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#">
                          <div className="flex gap-1 items-center">
                            <p className="pt-1">
                              <ion-icon name="cart-outline"></ion-icon>
                            </p>
                            All Items
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="150"
                  >
                    <Link to="/about">
                      <div className="flex gap-1 items-center effect-underline">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="person"></ion-icon>
                        </p>
                        About us
                      </div>
                    </Link>
                  </li>

                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="150"
                  >
                    <Link to="/our-team">
                      <div className="flex gap-1 items-center effect-underline">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="people"></ion-icon>
                        </p>
                        Our Team
                      </div>
                    </Link>
                  </li>
                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="150"
                  >
                    <Link to="/gallery">
                      <div className="flex gap-1 items-center effect-underline">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="pricetag"></ion-icon>
                        </p>
                        Gallery
                      </div>
                    </Link>
                  </li>

                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    <Link to="/contact">
                      <div className="flex gap-1 items-center effect-underline">
                        <p className="pt-1">
                          {" "}
                          <ion-icon name="call"></ion-icon>
                        </p>
                        Contact us
                      </div>
                    </Link>
                  </li>
                  {user?.role === "admin" && (
                    <li
                      className="menu-item"
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay="200"
                    >
                      <Link to="/applications">
                        <div className="flex gap-1 items-center effect-underline">
                          Applications
                        </div>
                      </Link>
                    </li>
                  )}
                  <li
                    className="menu-item"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    <div className="flex gap-1 items-center">
                      {/* <Link to="/login">
                        <Btn1 text="Login" />
                      </Link> */}
                      {isAuthenticated ? (
                        <>
                          <div className="flex gap-4">
                            <Btn1 onClickEvent={handleLogout} text="Logout" />
                            <Btn1
                              onClickEvent={() => navigate("/profile")}
                              text="Profile"
                            />
                          </div>
                        </>
                      ) : (
                        <Link to="/login">
                          <Btn1 text="Login" />
                        </Link>
                      )}
                    </div>
                  </li>
                  {/* <li className="menu-item">
                  <a href="#">Contact</a>
                </li> */}
                </ul>
              </nav>
              {/* <!-- navigation menu end --> */}
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default NavbarFinal;
