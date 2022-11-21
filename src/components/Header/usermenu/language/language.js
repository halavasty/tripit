import React from 'react';
import "./language.css";
import image from "../../../../assets/svg/Flag_UK.svg";
import imageBel from "../../../../assets/img/bel.jpg";
import ReactDOM from 'react-dom';

let lisLungudg = "lisLungudg";
let dellClass = "dellClass";

 const mainHTML = `
 
              `;

let dev1 ;
// 
let dev = image;
 let devTwo = imageBel;
 
let a = 0;
function activateLasers(){
  console.log("fdsfsd");
  // console.log(activateLasers);
  console.log("dsfsdfsadfdsfsadfsd");
let a = "onClick={activateLasersBel}";

  function createMarkup() {
    return {__html: `  <div id='textMainGo' onClick={activateLasers}  class="selecting-lang"> <img  class="lang-flag" src=${image}/></div>`};
  }

  function createMarkup5() {
    return {__html: `  <div id='textMainGoTwo'  onClick={activateLasersBel} class="selecting-lang"> <img  class="lang-flag" src=${imageBel}/></div>`};
  }

  ++a;
  console.log(a);
  const root = ReactDOM.createRoot(document.getElementById('textMainGo'));
  const rootTwo = ReactDOM.createRoot(document.getElementById('textMainGoTwo'));
 
  let dev = <div dangerouslySetInnerHTML={createMarkup()} />;
  let devTwo = <div dangerouslySetInnerHTML={createMarkup5()} />;
  root.render(dev);
  rootTwo.render(devTwo);



}
let ab = 1;

function activateLasersBel(){
 // alert("флаг 2");


if(ab === 1){
 let a = "onClick={activateLasersBel}";
 let b = "onClick={activateLasers}"

 function createMarkup3() {
  return {__html: `
       
  <div id='textMainGo' ${a} class="selecting-lang"><img  class="lang-flag" src=${image}/>
      
  `};
}

  function createMarkup2() {
    return {__html: `
         
              <div id='textMainGo' ${b} class="selecting-lang"><img  class="lang-flag" src=${imageBel}/></div>
        
    `};
  }
  

  console.log(a);
  const root = ReactDOM.createRoot(document.getElementById('textMainGo'));
  const rootTwo = ReactDOM.createRoot(document.getElementById('textMainGoTwo'));
  let devTwo = <div dangerouslySetInnerHTML={createMarkup3()} />;
  let dev = <div dangerouslySetInnerHTML={createMarkup2()} />;

  root.render(dev);
  rootTwo.render(devTwo);
 ++ab;
}else{
  function createMarkup() {
    return {__html: `  <div id='textMainGo' onClick={activateLasers}  class="selecting-lang"> <img  class="lang-flag" src=${image}/></div>`};
  }

  function createMarkup5() {
    return {__html: `  <div id='textMainGoTwo'  onClick={activateLasersBel} class="selecting-lang"> <img  class="lang-flag" src=${imageBel}/></div>`};
  }


  console.log(a);
  const root = ReactDOM.createRoot(document.getElementById('textMainGo'));
  const rootTwo = ReactDOM.createRoot(document.getElementById('textMainGoTwo'));
 
  let dev = <div dangerouslySetInnerHTML={createMarkup()} />;
  let devTwo = <div dangerouslySetInnerHTML={createMarkup5()} />;
  root.render(dev);
  rootTwo.render(devTwo);
  return ab = 1;
}

}


// function Mycom(){

//   const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );
//   const element = <h1>Hello, world</h1>;
//   root.render(element);
// }

// function MyComponent() {

//   return <div dangerouslySetInnerHTML={activateLasers()} />;
                   
// }



// 
// function MyComponent() {
//   return <div dangerouslySetInnerHTML={createMarkup()} />;
// }

// let count = 0;

// function activateLasers(){


//   if(count === 0){
//   const textMainGo = document.querySelector("#textMainGo");
//   textMainGo.insertAdjacentHTML("afterend", mainHTML);
//   count = 1;
//   }else{
//   let elem = document.querySelector("#dellClass");
//   if(elem != null){
//   elem.remove();
//   }
//   count = 0;
//   }
// };
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Language />, rootElement);



export const Language = () => {
    return (
      <>
       <div  className='belPosition'>
       <div class="switch-lang"> 
         
          <div id='textMainGo' onClick={activateLasers} class="selecting-lang"><img  class="lang-flag" src={image}/>
        </div>
        <div  class="lang-dropdown">
          <div id='textMainGoTwo' onClick={activateLasersBel} class="selecting-lang"><img  class="lang-flag" src={imageBel}/>
       
          </div>
        </div>
        </div>
         
        </div>
        <p  >{dev1}</p>
        {/* <MyComponent/> */}



      </>

      
    
    );
  };
