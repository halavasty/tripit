import React  from 'react';
import "./nicklogo.css";
import image from "../../../../assets/svg/Nick.svg";

export const Nicklogo = () => {
    return (
      <>
       <div className='nicklogoPosition'>
          <p className='nicklogoImgPosition'> Nick McMilan </p>
           <img className="nicklogoImg" src={image} alt="some example image"></img>
        </div>
      </>
    );
  };