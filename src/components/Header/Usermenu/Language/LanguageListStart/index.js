export function LanguageListStart ({listStart} ){
    return(
        
        listStart.map(lang => 
                (
                    
     
                        <img key={lang.name} className={lang.class} src={lang.image} alt={lang.name}  />
        
                )
            )
    );
}