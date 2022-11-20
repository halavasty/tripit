import React  from 'react';
import "./language.css";
import image from "../../../../assets/svg/Flag_UK.svg";

//let image = require('../../assets/img/bel.jpg');

export const Language = () => {
    return (
      <>
       <div>
          <img class="bel" src={image} alt="some example image"></img>
        </div>
      </>
    );
  };