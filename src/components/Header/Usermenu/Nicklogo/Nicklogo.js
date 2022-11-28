import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import "./Nicklogo.css";
import image from "../../../../assets/img/nologin.jpg";

import { auth, login, logout, firestore } from "../../../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getFirestore,
} from "firebase/firestore";
import { NicklogoLogin } from "./NicklogoLogin";

function logiNameActiv() {
  alert("test");
}

export const Nicklogo = () => {
  const db = getFirestore();
  const colRef = collection(db, "collection_name");
  const postCollection = collection(firestore, "post");
  const [user, isLoginUser] = useAuthState(auth);

  // const elements = [user] !== undefined  ? Object.keys([user]).reduce((a,c) => a.concat(...Object.values([user][c])),[]) : "пусто";
  // console.log("elements", elements);

  let userName = !!user && !!user.displayName ? user.displayName : "Не авторизован";
  let userImage = !!user && !!user.photoURL ? user.photoURL : image;

  // if(!isLoginUser){
  //   alert("Авторизован");
  // }else{
  //   alert("Не авторизован");
  // }

  return (
    <>
      <div className="nicklogoPosition">
        <p onClick={logiNameActiv} className="nicklogoImgPosition">
          {" "}
          {userName}{" "}
        </p>
        <div className="switch-lang">
          <div id="textMainGo">
            <img className="userImage-Nicklogo" src={userImage} />
          </div>
          <NicklogoLogin user={user} />
        </div>
      </div>
    </>
  );
};
