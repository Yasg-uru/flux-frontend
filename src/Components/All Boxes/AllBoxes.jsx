import React from "react";
import { Link } from "react-router-dom";

import BoxesData from "../../Pages/Data/BoxesData";
import Skeleton from "react-loading-skeleton";

const AllBoxes = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:pt-10 pt-10 mx-auto">
          {/* -------- Heading ------------  */}
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
            Our Major Highlights
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Explore FLUX
            </h1>
            <p className="w-44 mx-auto leading-relaxed text-base h-2 rounded-md bg-blue-500">
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {BoxesData.map((data,index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <Link to={data.link}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden AllboxesCard hover:shadow-md">
                    <img
                      className="lg:h-48 md:h-36 w-full min-h-36 object-cover object-center"
                      src={data.imgUrl}
                      alt="blog"
                    />                     
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {data.name ? data.name : <Skeleton/>}
                      </h1>
                      <p className="leading-relaxed mb-3">{data.desc ? data.desc :  <Skeleton count={5}/>}</p>
                      <div className="flex items-center flex-wrap ">
                        <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                          View More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBoxes;
