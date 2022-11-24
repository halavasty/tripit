import React  from 'react';
import "./Nicklogo.css";
import image from "../../../../assets/svg/Nick.svg";
import useState  from 'react';

function  logiNameActiv (){
  alert("test");
 
}

function logOffactiv(){
  alert("test");
}

function loginactiv(){
  alert("test");
}

export const Nicklogo = () => {

    return (
      <>
       <div className='nicklogoPosition'>
          <p onClick={logiNameActiv} className='nicklogoImgPosition'> Nick McMilan </p>
        <div className="switch-lang">
          <div id="textMainGo">
            <img src={image} />
          </div>
          <div  className="Nicklogo-dropdown">
            <div
            >
                  <p className='textNick' onClick={loginactiv}>Login </p>
            </div>
          </div>
          <div className="Nicklogo-dropdown">
            <div
            >
                  <p className='textNick' onClick={logOffactiv}>Login OFF</p>
        
            </div>
          </div>
        </div>
        </div>
      </>
    );
  };