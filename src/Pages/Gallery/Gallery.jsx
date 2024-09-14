import React, { useState } from "react";
import ImageSlider1 from "../../Components/Image Slider/ImageSlider1";
import CodeMantra from "../Data/CodeMantra";
import RoboSoccer2024Data from "../Data/RoboSoccer2024Data";
import HardwareEventData from "../Data/HardwareEventData";
import ArdinoWorkshopData from "../Data/ArdinoWorkshopData";
import WebDevWorkshopData from "../Data/WebDevWorkshopData";

const ImageGalleryHeadingData = [
  { title: "Code Mantra", data: CodeMantra },
  { title: "Robo Race", data: RoboSoccer2024Data },
  { title: "Hardware Event", data: HardwareEventData },
  { title: "Ardino Workshop", data: ArdinoWorkshopData },
  { title: "Web Workshop", data: WebDevWorkshopData },
];

const Gallery = () => {

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 sm:pt-28 py-24 mx-auto">
        {ImageGalleryHeadingData.map((gallery, index) => (
          <div key={index} className="py-10">
            <div className="flex flex-col text-center w-full sm:mb-20 mb-14">
              <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                Memorable Moments
              </h2>
              <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-gray-900">
                {gallery.title}
              </h1>
              <p className="w-44 mx-auto leading-relaxed text-base h-2 rounded-md bg-blue-500"></p>
            </div>

            {/* Pass the appropriate data to the ImageSlider1 component */}
        
            <ImageSlider1 data={gallery.data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
