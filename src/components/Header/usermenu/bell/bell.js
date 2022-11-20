import React  from 'react';
import image from "../../../../assets/svg/Notification.svg";
import "./bell.css";


export const Bell = () => {
    return (
      <>
       <div className='ballPosition'>
          <img className='ballStatus' src={image} alt="some example image"></img>
        </div>
      </>
    );
  };