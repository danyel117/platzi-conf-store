import React, { useState, useEffect } from 'react';

const Characters = () => {
    const [characters,setCharacters] = useState([])
    
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/').then(res=>res.json()).then(res=>{
            setCharacters(res.results)
        })
    },[])
    
    return ( 
        <div className="Characters">
            {characters.map(character=>(
            <h2>{character.name}</h2>
            ))}
        </div>
     );
}
 
export default Characters;