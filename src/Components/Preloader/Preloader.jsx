import React from 'react';
import './preloader.css';
import preloadergif from '../../assets/Preloader/fluxWebPreloader.gif'
import preloadergifmob from '../../assets/Preloader/Mobpreloader.gif'

const Preloader = () => {
    
  
  return (
    <>
      {/* <!-- ------------ PRELOADER ---------  --> */}
      <div className="flex items-center mx-auto justify-center">
          <div className='sm:block hidden'><img src={preloadergif} alt="" className='object-center ' /></div>
          <div className='sm:hidden block'><img src={preloadergifmob} alt="" className='object-center ' /></div>
          {/* You can customize the preloader further with CSS or use an actual loading animation */}
        </div>


    </>
  );
};

export default Preloader;
