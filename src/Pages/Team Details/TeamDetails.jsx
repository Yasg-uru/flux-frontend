import React, { useState } from "react";
import DepartmentHeads from "../Data/DepartmentHeads";
import MemberDetails from "../Data/MemberDetails";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CoConvenors from "../Data/CoConvenors";
import Convenors from "../Data/Convenors";

const TeamDetails = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* --------------- CONVENER DETAILS ---------------  */}
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 pt-28 pb-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-2xl font-semibold title-font mb-4 text-gray-900">
              Convenors Details
            </h1>
            <p className="lg:w-2/3 max-md:text-xs mx-auto leading-relaxed text-base">
              Our convenors are the heart of FLUX, bringing ideas to life
              through collaboration and creativity.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {Convenors.map((member, index) => {
              return (
                <div className="p-4 lg:w-1/4 md:w-1/2 w-1/2" key={index}>
                  <div className="h-full flex flex-col items-center text-center">
                    <span className="pt-4 px-4">
                      {isLoading && (
                        <Skeleton
                          circle={true}
                          className="sm:w-[200px] sm:h-[200px] w-[120px] h-[120px]"
                        />
                      )}
                      <img
                        alt="team"
                        className={`flex-shrink-0 aspect-square rounded-full object-cover object-center mb-4 ${
                          isLoading ? "hidden" : ""
                        }`}
                        src={member.profileUrl}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)}
                      />
                    </span>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {member.name ? member.name : <Skeleton />}
                      </h2>
                      <h3 className="text-gray-500 mb-3">Convenor</h3>

                      <span className="inline-flex gap-4 text-2xl cursor-pointer ">
                        <p className="text-blue-500 hover:scale-110 transition-all ease-in">
                          <a href={member.linkedinUrl}>
                            <ion-icon name="logo-linkedin"></ion-icon>
                          </a>
                        </p>
                        <p className="text-pink-500 hover:scale-110 transition-all ease-in">
                          <a href={member.InstaUrl}>
                            <ion-icon name="logo-instagram"></ion-icon>
                          </a>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* --------------- CO-CONVENER DETAILS ---------------  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:pt-20 pt-14 pb-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-2xl font-semibold title-font mb-4 text-gray-900">
              Co-Convenors Details
            </h1>
            <p className="lg:w-2/3 max-md:text-xs mx-auto leading-relaxed text-base">
              Our co-convenors are the heart of FLUX, bringing ideas to life
              through collaboration and creativity.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {CoConvenors.map((member, index) => {
              return (
                <div className="p-4 lg:w-1/4 md:w-1/2 w-1/2" key={index}>
                  <div className="h-full flex flex-col items-center text-center">
                    <span className="pt-4 px-4">
                      {isLoading && (
                        <Skeleton
                          circle={true}
                          className="sm:w-[200px] sm:h-[200px] w-[120px] h-[120px]"
                        />
                      )}
                      <img
                        alt="team"
                        className={`flex-shrink-0 aspect-square rounded-full object-cover object-center mb-4 ${
                          isLoading ? "hidden" : ""
                        }`}
                        src={member.profileUrl}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)}
                      />
                    </span>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {member.name ? member.name : <Skeleton />}
                      </h2>
                      <h3 className="text-gray-500 mb-3">Co-convenor</h3>

                      <span className="inline-flex gap-4 text-2xl cursor-pointer ">
                        <p className="text-blue-500 hover:scale-110 transition-all ease-in">
                          <a href={member.linkedinUrl}>
                            <ion-icon name="logo-linkedin"></ion-icon>
                          </a>
                        </p>
                        <p className="text-pink-500 hover:scale-110 transition-all ease-in">
                          <a href={member.InstaUrl}>
                            <ion-icon name="logo-instagram"></ion-icon>
                          </a>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* --------------- DEPARTMENT HEADS ---------------  */}
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 sm:pt-20 pt-14 pb-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-2xl font-semibold title-font mb-4 text-gray-900">
              Department Heads
            </h1>
            <p className="lg:w-2/3 max-md:text-xs mx-auto leading-relaxed text-base">
              Our Department Heads lead with innovation and expertise, driving
              FLUX to success. Meet the leaders behind our groundbreaking
              projects.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {DepartmentHeads.map((head, index) => {
              return (
                <div className="sm:p-8 p-4 lg:w-1/3 md:w-1/2 w-1/2" key={index}>
                  <div className="h-full flex flex-col items-center text-center">
                    <span className="sm:pt-10 pt-1 sm:px-10 px-2">
                      {isLoading && (
                        <Skeleton
                          circle={true}
                          className="sm:w-[200px] sm:h-[200px] w-[120px] h-[120px]"
                        />
                      )}
                      <img
                        alt="team"
                        className={`flex-shrink-0 aspect-square rounded-full object-cover object-center mb-4 ${
                          isLoading ? "hidden" : ""
                        }`}
                        src={head.profileUrl}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)} // To handle error cases where image fails to load
                      />
                    </span>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {head.name ? head.name : <Skeleton />}
                      </h2>
                      <h3 className="text-gray-500 mb-3">{head.position}</h3>

                      <span className="inline-flex gap-4 text-2xl cursor-pointer ">
                        <p className="text-blue-500 hover:scale-110 transition-all ease-in">
                          <a href={head.linkedinUrl}>
                            <ion-icon name="logo-linkedin"></ion-icon>
                          </a>
                        </p>
                        <p className="text-pink-500 hover:scale-110 transition-all ease-in">
                          <a href={head.InstaUrl}>
                            <ion-icon name="logo-instagram"></ion-icon>
                          </a>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------- MEMBERS DETAILS ---------------  */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:py-20 pt-14 pb-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-2xl font-semibold title-font mb-4 text-gray-900">
              Member Details
            </h1>
            <p className="lg:w-2/3 max-md:text-xs mx-auto leading-relaxed text-base">
              Our members are the heart of FLUX, bringing ideas to life through
              collaboration and creativity. Get to know the talented individuals
              who make it all possible.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {MemberDetails.map((member, index) => {
              return (
                <div className="p-4 lg:w-1/4 md:w-1/2 w-1/2" key={index}>
                  <div className="h-full flex flex-col items-center text-center">
                    <span className="pt-4 px-4">
                      {isLoading && (
                        <Skeleton
                          circle={true}
                          className="sm:w-[200px] sm:h-[200px] w-[120px] h-[120px]"
                        />
                      )}
                      <img
                        alt="team"
                        className={`flex-shrink-0 aspect-square rounded-full object-cover object-center mb-4 ${
                          isLoading ? "hidden" : ""
                        }`}
                        src={member.profileUrl}
                        onLoad={() => setIsLoading(false)}
                        onError={() => setIsLoading(false)}
                      />
                    </span>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {member.name ? member.name : <Skeleton />}
                      </h2>
                      <h3 className="text-gray-500 mb-3">Member</h3>

                      <span className="inline-flex gap-4 text-2xl cursor-pointer ">
                        <p className="text-blue-500 hover:scale-110 transition-all ease-in">
                          <a href={member.linkedinUrl}>
                            <ion-icon name="logo-linkedin"></ion-icon>
                          </a>
                        </p>
                        <p className="text-pink-500 hover:scale-110 transition-all ease-in">
                          <a href={member.InstaUrl}>
                            <ion-icon name="logo-instagram"></ion-icon>
                          </a>
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
