import imageTwo from "../../../../../../src/assets/svg/Flag_UK.svg";


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