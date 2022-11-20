import React  from 'react';
import "./nicklogo.css";
import image from "../../../../assets/svg/Nick.svg";

export const Nicklogo = () => {
    return (
      <>
       <div className='nicklogoPosition'>
          <p> Nick McMilan </p>
           <img class="bel" src={image} alt="some example image"></img>
        </div>
      </>
    );
  };