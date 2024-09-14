import React from "react";
import './btn1.css'

const Btn1 = (props) => {
  return (
    <>
      <button className="button flex gap-1 items-center" onClick={props.onClickEvent}>
        <p className="text-xl pt-2"><ion-icon name="log-in-outline"></ion-icon></p>
        {props.text}
      </button>
    </>
  );
};

export default Btn1;
