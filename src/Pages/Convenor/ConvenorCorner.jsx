import React from "react";
import { Link } from "react-router-dom";

const FacultyCorner = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-32 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-2xl font-semibold title-font mb-4 text-gray-900">
              Our Convenors
            </h1>
            <p className="lg:w-2/3 max-md:text-xs mx-auto leading-relaxed text-base">
              Our Convenors are the heart of FLUX, bringing ideas to life
              through collaboration and creativity.
            </p>
          </div>
          {/* --------- 1 (Abhijeet sir) ---------  */}
          <div className="flex max-md:items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-56 sm:h-56 h-32 w-32 sm:mr-10 inline-flex items-start justify-start rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/duqtesyku/image/upload/v1726117520/f439b58c-5a62-49ac-b06f-42b9aae1e733.png"
                alt="director"
                className="rounded-full object-cover aspect-square "
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium ">
                Abhijeet Singh
              </h2>
              <p className="text-gray-600 mb-2">Convenor</p>
              <p className="leading-relaxed text-base">
                Welcome to Technical Club FLUX at Samrat Ashok Technological
                Institute, Vidisha! As the Convenor, I’m thrilled to introduce a
                vibrant community dedicated to innovation, collaboration, and
                excellence in technology.
                <br /> <br />
                At FLUX, we blend hands-on experience with theory through
                workshops, seminars, and projects that span IoT, software
                development, and more. We’re a place where students from all
                fields come together to learn, share, and create.
                <br /> <br />
                Whether you're a seasoned tech enthusiast or just starting out,
                FLUX offers the perfect environment to grow, collaborate, and
                lead. Dive into our activities, engage with fellow members, and
                take advantage of the opportunities we offer.
                <br /> <br />
                Looking forward to your active participation and contribution!
                <br /> <br />
                Best regards,
                <br />
                Abhijeet Singh <br />
                Convenor, Technical Club FLUX <br />
                Mechanical Engineering, Batch 2025 <br />
                Samrat Ashok Technological Institute, Vidisha
              </p>
            </div>
          </div>

          {/* --------- 2 (Ayush Sir) ---------  */}
          <div className="flex max-md:items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium ">
                Ayush Suryavanshi
              </h2>
              <p className="text-gray-600 mb-2">Convenor</p>

              <p className="leading-relaxed text-base">
                Welcome to the Technical Club "FLUX" at Samrat Ashok
                Technological Institute, Vidisha! As the Convenor of FLUX, I’m
                thrilled to welcome you to our tech-driven community. Here, we
                bring together creative minds from different fields to explore
                and innovate. Whether you're into IoT, software development, or
                data science, FLUX offers hands-on workshops, projects, and
                seminars to help you grow and gain real-world skills. At FLUX,
                we value teamwork and inclusiveness. Whether you're a tech
                expert or just starting, there’s a place for you here. Join us,
                share your ideas, and let's push the boundaries of technology
                together!
                <br /> <br />
                I'm excited to see the creativity and passion you'll contribute
                as we innovate and grow together!
                <br /> <br />
                Best regards,
                <br /> <br />
                Ayush Suryavanshi <br />
                Convenor, Technical Club "FLUX" <br />
                Internet of Things - Batch 2025 <br />
                Samrat Ashok Technological Institute, Vidisha
              </p>
            </div>
            <div className="sm:w-56 sm:h-56 h-32 w-32  sm:order-none order-first sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/duqtesyku/image/upload/v1726117564/d32a0916-8006-484a-b31c-860fc0147bf7.png"
                alt="director"
                className="rounded-full object-cover aspect-square "
              />
            </div>
          </div>
          {/* --------- 3 (Prerna Maam) ---------  */}
          <div className="flex max-md:items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-56 sm:h-56 h-32 w-32 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/duqtesyku/image/upload/v1726149539/e35dec1a-dcd6-4b99-8f86-94ae5474a043.png"
                alt="director"
                className="rounded-full object-contain aspect-square "
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium ">
                Prerna Rathore
              </h2>
              <p className="text-gray-600 mb-2">Convenor</p>
              <p className="leading-relaxed text-base">
                Welcome to FLUX, the hub of tech innovation at SATI! As the
                Convenor, I invite you to join a community where creativity,
                teamwork, and hands-on learning come together. FLUX is all about
                turning ideas into real projects—whether it’s IoT, robotics, or
                software development.
                <br /> <br />
                It’s not just about tech; it’s about growing your skills and
                working with people who share your passion. Whether you're a
                beginner or experienced, there's something for everyone. Your
                idea could spark the next big innovation—join FLUX and shape
                those ideas!
                <br /> <br />
                Let’s innovate together!
                <br /> <br />
                Prerna Rathore <br />
                Convenor, Technical Club "FLUX" <br />
                Internet of Things - Batch 2025 <br />
                Samrat Ashok Technological Institute, Vidisha
              </p>
            </div>
          </div>
          {/* --------- 4 (Monika Basene )---------  */}
          <div className="flex max-md:items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium ">
                Monika Basene
              </h2>
              <p className="text-gray-600 mb-2">Convenor</p>

              <p className="leading-relaxed text-base">
                Welcome to the Technical Club "FLUX" at Samrat Ashok
                Technological Institute, Vidisha. As the head of this innovative
                club, I’m excited to introduce a space where creativity,
                collaboration, and tech excellence come together. FLUX brings
                students from all fields to work on hands-on projects, attend
                workshops, and grow through shared learning experiences.
                <br /> <br />
                Whether you’re into IoT, software development, or just
                beginning, there’s something here for everyone. Our supportive
                environment values every idea, fostering skills, leadership, and
                teamwork. To me, FLUX feels like a family of innovators with a
                shared vision and positive, creative energy. <br /> <br />
                Excited to see the ideas and energy you'll bring as we innovate
                together! <br /> <br />
                Best wishes, <br /> <br />
                Monika Basene <br />
                Convenor, Technical Club "FLUX" <br />
                Internet of Things - Batch 2025 <br />
                Samrat Ashok Technological Institute, Vidisha
              </p>
            </div>
            <div className="sm:w-56 sm:h-56 h-32 w-32  sm:order-none order-first sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/duqtesyku/image/upload/v1726117585/ca10aac4-544a-41a2-af1e-f089675518be.png"
                alt="director"
                className="rounded-full object-cover aspect-square "
              />
            </div>
          </div>

          <Link to="/our-team">
            {" "}
            <button className="flex mx-auto mt-20 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Join our team
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default FacultyCorner;
