import React from "react";
import "./footer.css";
import logo from "../../assets/Logo/logo.png";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Footer = () => {

   /* ---------- BACK TO TOP ----------  */


   const [position, setPosition] = React.useState({ top: 0, left: 0 });
   React.useEffect(() => {
     window.scroll({
       top: position.top,
       left: position.left,
       behavior: "smooth",
     });
   });

  return (
    <>
      {/* <!-- --------- FOOTER SECTION ---------  --> */}

      <footer className="text-gray-700 body-font max-md:mt-10 footer-section" style={{borderTop:"2px solid #3b82f6"}}>
        <div className="container px-5 sm:py-24 pt-8 pb-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-44 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex flex-col title-font font-medium items-center md:justify-start text-center justify-center text-gray-700">
              <img src={logo} alt="" className="sm:w-[8vw] w-[25vw] " />
              <h1 className="sm:text-xl text-lg text-[#000] w-full">Technical Club</h1>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="text-[#3b82f6] font-bold tracking-widest text-sm mb-3">
                ON OUR SITE
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-[#3b82f6]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-[#3b82f6]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-700 hover:text-[#3b82f6]">
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    to="/howitworks"
                    className="text-gray-700 hover:text-[#3b82f6]"
                  >
                    Gallery
                  </a>
                </li>
              
                {/* <li>
                  <a className="text-[#3b82f6] hover:text-[#3b82f6]">
                    Volunteer Program
                  </a>
                </li> */}
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="text-[#3b82f6] font-bold tracking-widest text-sm mb-3">
                SUPPORT
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <li>
                  <Link to="/faqs" className="text-gray-700 hover:text-[#3b82f6]">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-700 hover:text-[#3b82f6]"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-team"
                    className="text-gray-700 hover:text-[#3b82f6] "
                  >
                   Our Team </Link>
                </li>
                <li>
                  <a
                    to="/privacy-policy"
                    className="text-gray-700 hover:text-[#3b82f6]"
                  >
                    Privacy policy
                  </a>
                </li>
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="text-[#3b82f6] font-bold tracking-widest text-sm mb-3">
                OTHER LINKS
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <li>
                  <a
                    href=""
                    className="text-gray-700 hover:text-[#3b82f6]"
                  >
                    Website Team
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-700 hover:text-[#3b82f6]"
                  >
                    How it works
                    
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-700 hover:text-[#3b82f6]"
                  >
                    Reviews
                  </a>
                </li>
                <li onClick={() =>
                      setPosition({ ...position, position: { top: 0, left: 0 } })
                    }>
                  <a
                    
                    className="text-gray-700 hover:text-[#3b82f6]"
                    
                  >
                    Back to top
                  </a>
                </li>
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-1/2 px-4">
              <h2 className="text-[#3b82f6] font-bold tracking-widest text-sm mb-3">
                GET IN TOUCH WITH US
              </h2>
              <span className="list-none mb-10 flex gap-2 flex-col footer-links">
                <a href="tel:8839170393">
                  <p>
                    Bhopal (M.P), India
                    <br />
                    +91 8839170393
                  </p>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-250">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Copyright @ 2024. Flux - Made by Flux Web Team. All rights reserved.
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
