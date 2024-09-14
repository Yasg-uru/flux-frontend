// ModelViewer.js
import React from "react";
import "@google/model-viewer";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const ModelViewer = ({className}) => {
  // const boxRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: boxRef.current,
  //       start: "top 80%", // start when top of the element hits 80% of the viewport
  //       end: "bottom 20%", // end when bottom of the element hits 20% of the viewport
  //       scrub: 3, // smooth scrubbing
  //       markers: true, // for debugging purposes
  //     },
  //   });

  //   tl.to(boxRef.current, {
  //     y: -200,
  //     rotation: -45,
  //     duration: 1,
  //   })
  //     .to(boxRef.current, { y: 0, scale: 0.5, duration: 1, ease: "bounce.out" })
  //     .to(boxRef.current, {
  //       x: 0,
  //       rotation: 0,
  //       scale: 1,
  //       duration: 1,
  //       ease: "power4.out",
  //     })
  //     .to(boxRef.current, { opacity: 0, duration: 0.5 })
  //     .to(boxRef.current, { opacity: 1, duration: 0.5, ease: "power1.inOut" });
  // }, []);

  return (
    <>
      {/* --------- LAPTOP DEVICE ------------  */}
      <div className={`sm:block hidden ${className}`}>
        <model-viewer
          src="the_d-21-11_robot_2.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="neutral"
          poster="poster.webp"
          shadow-intensity="1"
          environment-image="legacy"
          rotation="40rad 0.2rad 0.1rad"
          style={{ width: "100%", height: "90vh" }}

        ></model-viewer>
      </div>

      {/* --------- MOBILE DEVICE ------------  */}
      <div className={`sm:hidden block ${className}`}>
        <model-viewer
          src="the_d-21-11_robot_2.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="neutral"
          poster="poster.webp"
          shadow-intensity="1"
          environment-image="legacy"
          rotation="40rad 0.2rad 0.1rad"
          style={{ width: "100%", height: "70vh" }}
        ></model-viewer>
      </div>
    </>
  );
};

export default ModelViewer;
