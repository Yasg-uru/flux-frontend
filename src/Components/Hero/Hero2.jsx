import React from "react";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 sm:py-24 pt-20 pb-0 flex-wrap-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-4 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-semibold text-gray-900 max-md:mt-2">
              Stay Connected with Us
            </h1>
            <p className="mb-8 leading-relaxed">
              "Join our journey across platforms! Follow us on Instagram for the
              latest updates, behind-the-scenes moments, and a closer look at
              our day-to-day activities, from exciting projects to fun team
              moments. Stay tuned for exclusive content, event highlights, and
              sneak peeks that you won’t want to miss. On LinkedIn, connect with
              us to explore professional opportunities"{" "}
              <span className="max-md:hidden">
                , collaborate on meaningful projects, and stay informed about
                career openings, industry insights, and future partnerships.
                Whether you're looking for inspiration or collaboration, we're
                just a click away!
              </span>{" "}
              "
            </p>
            <div className="flex justify-center max-md:flex-col max-md:gap-3">
              <Link to="https://www.instagram.com/fluxsati/">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  <span className="flex items-center justify-center gap-2">
                    <p>Follow Us on Instagram</p>{" "}
                    <p className="pt-1">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </p>
                  </span>
                </button>
              </Link>
              <Link to="https://www.linkedin.com/company/fluxsati/mycompany/">
                <button className="sm:ml-4 ml-0 inline-flex text-blue-500 bg-gray-100 border-blue-500 border-2 py-2 px-6 focus:outline-none hover:bg-blue-100  rounded text-lg max-md:px-8">
                  <span className="flex items-center justify-center gap-2">
                    <p>Connect on LinkedIn</p>{" "}
                    <p className="pt-1">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </p>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/duqtesyku/image/upload/v1726153445/connected-world-animate_cenyiz.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
