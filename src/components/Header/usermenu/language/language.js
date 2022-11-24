import React from "react";
import "./Language.css";
import { LanguageList } from "./LanguageList";
import image from "../../../../../src/assets/img/bel.jpg";


const flagOne = <img onClick={result} className="Post-position Lunguage-flag" src={image}/>;

function result(){
  alert("test");

}

export const Language = () => {

      const list = [flagOne];
      return (
        <div className="center">
            <LanguageList list={list}/>
        </div>

  );
};
