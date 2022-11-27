import imageTwo from "../../../../../../src/assets/svg/Flag_UK.svg";

<<<<<<< HEAD
=======
export function LanguageList ({list}){
    console.log(list);
    const FlagTwo = <img className="Lunguage-flag" src={imageTwo} />;
    
    return(
    <>
        <div className="PostList belPosition">
        <div className="switch-lang">
        <div id="textMainGo"  className="selecting-Lunguage" >
            {FlagTwo}
        </div>
            <div className="Lunguage-dropdown" >
          
            <div id="textMainGo" className="selecting-Lunguage" >
            {list.length &&  list.map((value => <LanguageEtem value={value}/>))}
            </div>
            </div>
        </div>
        </div>
>>>>>>> 648e4c9fdcc152b02a4d3e35bdff8cc86ffa8e0b

export function LanguageEvent(){
    alert('тест');

}

export function LanguageList ({list} ){
    return(
        list.map(lang => 
                (
                    <div key={lang.name}  className="selecting-Lunguage"  onClick={LanguageEvent}>
                        <img  className={lang.class} src={lang.image} alt={lang.name}  />
                    </div>
                )
            )
    
    );
}