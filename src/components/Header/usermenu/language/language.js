import React from "react";
import "./language.css";
import image from "../../../../assets/svg/Flag_UK.svg";
import imageBel from "../../../../assets/img/bel.jpg";
import ReactDOM from "react-dom";

function activateLasers() {

  function createMarkup() {
    return {
      __html: `  <div id='textMainGo' onClick={activateLasers}  class="selecting-lang"> <img  class="lang-flag" src=${image}/></div>`,
    };
  }

  function createFoor() {
    return {
      __html: `  <div id='textMainGoTwo'  onClick={activateLasersBel} class="selecting-lang"> <img  class="lang-flag" src=${imageBel}/></div>`,
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
  // alert("флаг 2");

  if (count === 1) {
    let a = "onClick={activateLasersBel}";
    let b = "onClick={activateLasers}";

    function createThree() {
      return {
        __html: `
       
                <div id='textMainGo' ${a} class="selecting-lang"><img  class="lang-flag" src=${image}/>
                    
                `,
      };
    }

    function createTwo() {
      return {
        __html: `
              <div id='textMainGo' ${b} class="selecting-lang"><img  class="lang-flag" src=${imageBel}/></div>
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
        __html: `  <div id='textMainGo' onClick={activateLasers}  class="selecting-lang"> <img  class="lang-flag" src=${image}/></div>`,
      };
    }

    function createFive() {
      return {
        __html: `  <div id='textMainGoTwo'  onClick={activateLasersBel} class="selecting-lang"> <img  class="lang-flag" src=${imageBel}/></div>`,
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
        <div class="switch-lang">
          <div id="textMainGo" onClick={activateLasers} class="selecting-lang">
            <img class="lang-flag" src={image} />
          </div>
          <div class="lang-dropdown">
            <div
              id="textMainGoTwo"
              onClick={activateLasersBel}
              class="selecting-lang"
            >
              <img class="lang-flag" src={imageBel} />
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};
