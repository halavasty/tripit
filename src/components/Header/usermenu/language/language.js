import React  from 'react';
import * as ReactDOM from 'react-dom';
import "./language.css";
import image from "../../../../assets/svg/Flag_UK.svg";


//let image = require('../../assets/img/bel.jpg');
let test = "Тест";
let lisLungudg = "lisLungudg";


const mainHTML = `
  <ul  class="${lisLungudg}">
    <li>Мова</li>
    <li>Мова</li>
    <li>Мова</li>
  </ul>
`;

function activateLasers(){
  console.log("Здесь");
  //alert(test);

  const textMainGo = document.querySelector("#textMainGo");
  textMainGo.insertAdjacentHTML("afterend", mainHTML);
};



export const Language = () => {
    return (
      <>
       <div onClick={activateLasers} className='belPosition'>
          <img   class="bel" src={image} alt="some example image"></img>
        </div>
        
        <div id='textMainGo'>
        </div>

      </>
    );
  };