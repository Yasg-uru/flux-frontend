import React from "react";
import './btn2.css'

const Btn2 = (props) => {
  return (
    <>
      <button className="button-2 flex gap-1 items-center">
        <p className="text-xl pt-2"><ion-icon name="log-in-outline"></ion-icon></p>
        {props.text}
      </button>
    </>
  );
};

export default Btn2;
