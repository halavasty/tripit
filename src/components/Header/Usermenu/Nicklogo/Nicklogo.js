import React, {useState}  from 'react';
import { useAuthState } from "react-firebase-hooks/auth";

import "./Nicklogo.css";
import image from "../../../../assets/svg/Nick.svg";
import { auth, login } from "../../../../firebase";


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

    const [user, isLoginUser] = useAuthState(auth);

  // const [user, isLoginUser] = useAuthState(auth);
  // const [isLoading, setIsLoading] = useState(false);

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
         
                  <p className='textNick' onClick={login}>Login </p>
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