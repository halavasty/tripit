import React from "react";
import "./Language.css";
import { LanguageList } from "./LanguageList";
import { LanguageEvent } from "./LanguageList";
import image from "../../../../../src/assets/img/bel.jpg";
import imageTwo from "../../../../../src/assets/svg/Flag_UK.svg";
import imageThree from "../../../../../src/assets/img/Norve.jpg";

function mainLangugeEvent() {
  alert("test");
  
}

export const Language = () => {

      const list = [
        {name: "by", image: image, class: "Lunguage-flag" },
        {name: "nr", image: imageThree, class: "Lunguage-flag" },
      ];

      return (
        <div className="center">
          <div  className="Position-Lungudge">
            <div className="PostList belPosition">
                <div className="switch-lang">    
                  <img className="Lunguage-flag" src={imageTwo} onClick={mainLangugeEvent} />
                    <div className="Lunguage-dropdown">
                       <LanguageList list={list}/>
                    </div>
               </div>
           </div>
         </div>
      </div>
  );
};