import React, { useEffect, useState } from "react";
import ModelViewer from "../Model-3d/ModelViewer";
import Skeleton from "react-loading-skeleton";

const Hero1 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set a delay of 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <>
      <section className="text-gray-600 bg-white body-font">
        <div className="container mx-auto flex sm:px-8 px-2 sm:pb-24 pb-10 pt-16 md:flex-row max-md:flex-wrap-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
              Specialized in <span className="text-[#2563eb]">Impossible</span> things
            </h1>
            <p className="mb-8 leading-relaxed font-normal">
              Welcome to FLUX, we transform dreams into reality. As the leading
              robotics club at SATI, our passionate team thrives on tackling
              ambitious projects and pushing the boundaries of engineering. We
              explore new frontiers and make the impossible possible. Join us in
              our mission to engineer the impossible. Together, we are FLUX.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Events
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-2 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg ">
                Programs
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-full mx-auto">
            {isLoading && <Skeleton className="sm:w-full sm:h-[500px] h-[300px] my-20" />}
            {!isLoading && <ModelViewer className="w-full h-auto" />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero1;
