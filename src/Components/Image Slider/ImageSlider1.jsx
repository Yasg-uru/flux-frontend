import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Skeleton from "react-loading-skeleton";

const ImageSlider1 = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section>
      <PhotoProvider>
        <div className="cardslider-container">
          <Swiper
            effect={"coverflow"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="swiper_container"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <PhotoView src={item.imgUrl}>
                  <div className="w-full">
                    {isLoading && (
                      <Skeleton
                        className="w-full h-[250px] object-cover rounded-md"
                      />
                    )}
                    <img
                      src={item.imgUrl}
                      alt={item.imgAlt || "Image"}
                      className="w-full h-[250px] object-cover rounded-md"
                      loading="lazy"
                      onLoad={() => setIsLoading(false)}
                      onError={() => setIsLoading(false)}
                    />
                  </div>
                </PhotoView>
              </SwiperSlide>
            ))}

            <div className="sm:slider-controler max-md:hidden">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </PhotoProvider>
    </section>
  );
};

export default ImageSlider1;
