import React, {useState}  from 'react';
import { useAuthState } from "react-firebase-hooks/auth";

import "./Nicklogo.css";
import image from "../../../../assets/svg/Nick.svg";

import { auth, login, logout, firestore } from "../../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function  logiNameActiv (){
  alert("test");
 
}

console.log("user",auth);



export const Nicklogo = () => {
    //  let displayName = { displayName};
    // const [user, isLoginUser] = useAuthState(auth);
    const postCollection = collection(firestore, "post");
    const [user] = useAuthState(auth);
    const [post, setPost] = useState({ title: "", text: "" });


let result = "Авторізація";
    let userName =  user.displayName !== 10 ? user.displayName : "авоторізація";
    let value = [user];
    console.log("value.displayName", value.displayName);
    console.log("value", value);
 

    // let listPost =  [user] ?  [user].map((item => { user = item.user.displayName })) : null;
    // console.log("listPost",listPost);

    if([user].displayName !== null){
      console.log("Получілось");
    }
    
   console.log("postCollection",auth);


// console.log("user.displayName", user.displayName);
  // const [user, isLoginUser] = useAuthState(auth);
  // const [isLoading, setIsLoading] = useState(false);

    return (
      <>
       <div className='nicklogoPosition'>
          <p onClick={logiNameActiv} className='nicklogoImgPosition'> {userName} </p>
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
                  <p className='textNick' onClick={logout}>Login OFF</p>
        
            </div>
          </div>
        </div>
        </div>

        
      </>
    );
  };