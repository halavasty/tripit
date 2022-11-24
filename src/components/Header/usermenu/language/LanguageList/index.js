import React, {useState} from "react";
import { LanguageEtem } from "../LanguageEtem";
import imageTwo from "../../../../../../src/assets/svg/Flag_UK.svg";





export function LanguageList ({list}){
    console.log(list);
    const FlagTwo = <img className="Lunguage-flag" src={imageTwo} />;
    return(
    <>
        <div className="PostList belPosition">
        <div className="switch-lang">
        <div id="textMainGo"  className="selecting-Lunguage">
            {FlagTwo}
 
        </div>
            <div className="Lunguage-dropdown">
            <div id="textMainGo" className="selecting-Lunguage">
            {list.length &&  list.map((value => <LanguageEtem value={value}/>))}
            </div>
            </div>
        </div>
        </div>

</>
    );
}