import React  from 'react';
import image from "../../../../assets/svg/Alert.svg";
import "./Bell.css";


export const Bell = ({counter}) => {
    return (
      <>
       <div className='ballPosition'>
          <img className='ballStatus' src={image} alt="some example image"></img>
         
        </div>
        <sup className='Ball-Number'>{counter}</sup>
      </>
    );
  };