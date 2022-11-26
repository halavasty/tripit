import React  from 'react';
import image from "../../../../assets/svg/Alert.svg";
import "./Bell.css";

function ball(){
 alert("test");
}


export const Bell = ({counter}) => {

    return (
      
      <>
      
       <div className='ballPosition'>
          <img onClick={ball} className='ballStatus' src={image} alt="some example image"></img>
         
        </div>
        <sup  className='Ball-Number'>{counter}</sup>
      </>
    );
  };