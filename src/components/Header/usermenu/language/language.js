import React  from 'react';
import * as ReactDOM from 'react-dom';
import "./language.css";
import image from "../../../../assets/svg/Flag_UK.svg";


//let image = require('../../assets/img/bel.jpg');
let test = "Тест";


function activateLasers(){
  console.log("Здесь");
  alert(test);
};



export const Language = () => {
    return (
      <>
       <div onClick={activateLasers} className='belPosition'>
          <img   class="bel" src={image} alt="some example image"></img>
        </div>
      </>
    );
  };