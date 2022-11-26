import React from "react";
import "./Language.css";
import { LanguageList } from "./LanguageList";
import image from "../../../../../src/assets/img/bel.jpg";
import imageTwo from "../../../../../src/assets/svg/Flag_UK.svg";

const flagOne = <img onClick={result} className="Post-position Lunguage-flag" src={image}/>;

function result(){
  alert("test");
  flagOne = "";
  flagOne = <img onClick={result} className="Post-position Lunguage-flag" src={imageTwo}/>;
  console.log(flagOne);
  return flagOne;
}

export const Language = () => {

      const list = [flagOne];
      return (
        <div className="center">
            <LanguageList list={list}/>
        </div>

  );
};
