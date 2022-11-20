import React  from 'react';
import * as ReactDOM from 'react-dom';
import "./language.css";
import image from "../../../../assets/svg/Flag_UK.svg";

let lisLungudg = "lisLungudg";
let dellClass = "dellClass";

const mainHTML = `
  <ul id="${dellClass}" class="${lisLungudg}">
    <li>English</li>
  </ul>
`;

let count = 0;

function activateLasers(){


  if(count === 0){
  const textMainGo = document.querySelector("#textMainGo");
  textMainGo.insertAdjacentHTML("afterend", mainHTML);
  count = 1;
  }else{
  let elem = document.querySelector("#dellClass");
  if(elem != null){
  elem.remove();
  }
  count = 0;
  }
};


export const Language = () => {
    return (
      <>
       <div id='textMainGo' onClick={activateLasers} className='belPosition'>
          <img   class="bel" src={image} alt="some example image"></img>
        </div>
        
 

      </>
    );
  };