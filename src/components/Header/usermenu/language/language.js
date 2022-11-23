import React from "react";
import "./Language.css";
import image from "../../../../assets/svg/Flag_UK.svg";
import imageBel from "../../../../assets/img/bel.jpg";
import ReactDOM from "react-dom";

let selectingLunguage = "class='selecting-Lunguage'";
let lunguageFlag = "class='Lunguage-flag'";
let activateBel = "onClick={activateLasersBel}";
let activate = "onClick={activateLasers}";

function activateLasers() {

  function createMarkup() {
    return {
      __html: `
              <div id='textMainGo' ${activateBel} ${selectingLunguage}><img  ${lunguageFlag} src=${image}/></div>
              `,
    };
  }

  function createFoor() {
    return {
      __html: `
            <div id='textMainGo' ${activate} ${selectingLunguage}><img  ${lunguageFlag} src=${imageBel}/></div>
             `,
    };
  }

  const root = ReactDOM.createRoot(document.getElementById("textMainGo"));
  const rootTwo = ReactDOM.createRoot(document.getElementById("textMainGoTwo"));

  let dev = <div dangerouslySetInnerHTML={createMarkup()} />;
  let devTwo = <div dangerouslySetInnerHTML={createFoor()} />;
  root.render(dev);
  rootTwo.render(devTwo);
}

let count = 1;

function activateLasersBel() {

  if (count === 1) {


    function createThree() {
      return {
        __html: `
                <div id='textMainGo' ${activateBel} ${selectingLunguage}><img  ${lunguageFlag} src=${image}/></div>
                `,
      };
    }

    function createTwo() {
      return {
        __html: `
              <div id='textMainGo' ${activate} ${selectingLunguage}><img  ${lunguageFlag} src=${imageBel}/></div>
               `,
      };
    }

    const root = ReactDOM.createRoot(document.getElementById("textMainGo"));
    const rootTwo = ReactDOM.createRoot(
      document.getElementById("textMainGoTwo")
    );
    let devTwo = <div dangerouslySetInnerHTML={createThree()} />;
    let dev = <div dangerouslySetInnerHTML={createTwo()} />;

    root.render(dev);
    rootTwo.render(devTwo);
    ++count;
  } else {
    function createSix() {
      return {
        __html: `  <div id='textMainGo' ${selectingLunguage}> <img  ${lunguageFlag} src=${image}/></div>`,
      };
    }

    function createFive() {
      return {
        __html: `  <div id='textMainGoTwo' ${selectingLunguage}> <img  ${lunguageFlag} src=${imageBel}/></div>`,
      };
    }

    const root = ReactDOM.createRoot(document.getElementById("textMainGo"));
    const rootTwo = ReactDOM.createRoot(
      document.getElementById("textMainGoTwo")
    );

    let dev = <div dangerouslySetInnerHTML={createSix()} />;
    let devTwo = <div dangerouslySetInnerHTML={createFive()} />;
    root.render(dev);
    rootTwo.render(devTwo);
    return (count = 1);
  }
}

export const Language = () => {
  return (
    <>
      <div className="belPosition">
        <div className="switch-lang">
          <div id="textMainGo" onClick={activateLasers} className="selecting-Lunguage">
            <img className="Lunguage-flag" src={image} />
          </div>
          <div className="Lunguage-dropdown">
            <div
              id="textMainGoTwo"
              onClick={activateLasersBel}
              className="selecting-Lunguage"
            >
              <img className="Lunguage-flag" src={imageBel} />
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};
