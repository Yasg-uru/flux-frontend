import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/duqtesyku/image/upload/v1726203514/team-goals-animate_p60ajl.svg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Mission & <span className="text-blue-500">Vision</span>
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Our mission is to bridge the gap between theory and practice in
              technology education. We offer students opportunities for
              experiential learning, collaboration on meaningful projects, and
              growth in technical, leadership, and communication skills to
              prepare them for real-world challenges.
              <br /> <br />
              Our vision is to foster innovation and collaboration by providing
              a platform for students to explore and excel in various technical
              fields. We aim to create an interdisciplinary environment that
              encourages hands-on learning, creativity, and knowledge sharing,
              preparing students for future challenges and contributions to
              society.
            </p>

            <div className="flex justify-center">
              <Link to="/our-team">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Our Team
                </button>
              </Link>
              <Link to="/contact">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* -------- FOUNDER SECTION ---------  */}
      <section className="text-gray-600 body-font  sm:px-10 px-3 sm:py-20 pt-16">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-3xl font-semibold title-font mb-2 text-gray-900">
            Founder of <span className="text-blue-500">Flux</span>
          </h1>
          <p className="lg:w-2/3 max-md:text-lg mx-auto font-medium leading-relaxed text-xl">
            Mritunjay Pathak
          </p>
        </div>
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded h-[500px] mx-auto"
              alt="hero"
              src="https://res.cloudinary.com/duqtesyku/image/upload/v1726200946/69405563-2c6c-4509-af02-ce69b493198f.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="mb-8 leading-relaxed font-normal">
              It’s incredible to see how much the club has evolved since we
              started it years ago. Our original goal was simple: to create a
              space where students could innovate, develop technical skills, and
              collaborate—a place where ideas could be transformed into
              real-world solutions, and a strong community could support one
              another, even long after graduation.
              <br /> <br />
              This club is built on initiative. Don’t wait for the perfect
              conditions—prototype, iterate, and tap into the expertise within
              this group. The true strength of this community lies in the
              networks you build and the knowledge you exchange, both now and in
              the future. Embrace challenging problems, pursue ambitious
              projects, and never hesitate to seek out collaboration or
              mentorship.
              <br /> <br />
              Mritunjay Pathak <br />
              Just an SDE at Amazon <br />
              Computer Science & Engineering, Batch of 2019
            </p>
            <div className="flex justify-center  max-md:flex-col max-md:gap-3 max-md:mx-auto">
              <Link to="https://www.instagram.com/deamon_aura_santuryu?igsh=cGN5amphMGtjYWsy">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Follow him on Instagram
                </button>
              </Link>
              <Link to="https://www.linkedin.com/in/cybermritunjay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <button className="sm:ml-4 ml-0 inline-flex text-gray-700 bg-gray-100 border-2 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg border-gray-200">
                  Connect him on LinkedIn
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* -------- Co-FOUNDER SECTION ---------  */}
      <section className="text-gray-600 body-font  sm:px-10 px-3 sm:py-20 pt-16">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-3xl font-semibold title-font mb-2 text-gray-900">
            Co-Founder of <span className="text-blue-500">Flux</span>
          </h1>
          <p className="lg:w-2/3 max-md:text-lg mx-auto font-medium leading-relaxed text-xl">
            Shubham Pathak
          </p>
        </div>
        <div className="container mx-auto flex max-md:flex-wrap-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto">
            {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <span className="text-[#3b82f6]">Founder</span> of Flux
              <br className="lg:inline-block" />
              <span className="text-gray-500">Shubham Pathak</span>
            </h1> */}
            <p className="mb-8 leading-relaxed line-clamp-10">
              Flux: A Journey of Growth and Impact
              <br /> <br />
              Flux represents an ongoing journey of growth and self-improvement,
              driving positive change within both ourselves and society. When we
              founded this club, our vision was to create a dynamic platform for
              individuals to exchange ideas, transform concepts into reality,
              and access free training. Over the years, Flux has evolved into a
              vibrant capacity-building hub for our esteemed institution.
              <br /> <br />
              After five incredible years, Flux has discovered its purpose, and
              I believe it will continue to inspire others to find theirs, just
              as it has for me. Together, we'll further develop ourselves as a
              force multiplier, driving change in both business and technology.
              <br /> <br />
              Currently working as a Consultant at Infosys, <br />
              Electronics & Communication Branch, Class of 2019
            </p>
            <div className="flex justify-center  max-md:flex-col max-md:gap-3 max-md:mx-auto">
              <Link to="https://www.linkedin.com/in/shubham-upadhyay-pathak-02368b120?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Connect him on LinkedIn
                </button>
              </Link>
              {/* <Link to="https://www.linkedin.com/in/cybermritunjay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <button className="sm:ml-4 ml-0 inline-flex text-gray-700 bg-gray-100 border-2 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg border-gray-200">
                  
                </button>
              </Link> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 max-md:mb-10 mx-auto">
            <img
              className="object-cover object-center rounded max-h-[400px] mx-auto"
              alt="hero"
              src="https://res.cloudinary.com/duqtesyku/image/upload/v1726027174/founderofflux_guirr0.png"
            />
          </div>
         
        </div>
      </section>
    </>
  );
};

export default About;
