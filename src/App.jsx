import React, { useEffect, useState } from "react";

import "./App.css";
import NavbarFinal from "./Components/Navbar/Navbar_Final";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import AllEvents from "./Pages/All Events/AllEvents";
import ScrollToTop from "./Components/Scroll to top/ScrollToTop";
import Faq from "./Components/Faq/Faq";
import Preloader from "./Components/Preloader/Preloader";
import Gallery from "./Pages/Gallery/Gallery";
import TeamDetails from "./Pages/Team Details/TeamDetails";
import "react-loading-skeleton/dist/skeleton.css";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ProfilePage from "./Pages/Profile/ProfilePage";
import Contact from "./Pages/Contact/Contact";
import "react-photo-view/dist/react-photo-view.css";
import About from "./Pages/About/About";
import FacultyCorner from "./Pages/Faculty Corner/FacultyCorner";
import ConvenorCorner from "./Pages/Convenor/ConvenorCorner";

import Applicants from "./Pages/Application/Applicants";

function App() {
  // ------------ FOR PRELOADER -------------
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call or any asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <>
      {isLoading ? (
        // Display preloader while isLoading is true
        <Preloader />
      ) : (
        <div className="App w-full mx-auto">
          <ScrollToTop />
          <NavbarFinal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/all-events" element={<AllEvents />} />
            <Route path="/faculty-corner" element={<FacultyCorner />} />
            <Route path="/convenor-corner" element={<ConvenorCorner />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/our-team" element={<TeamDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/applications" element={<Applicants />} />
          </Routes>

          {/* <div className="sm:py-10"></div> */}

          <Faq />

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
