import React, { useState, useEffect,useReducer } from 'react';

const initialState = {
    favorites:[]
}

const favoriteReducer = (state,action) => {
    switch (action.type){
        case "ADD_TO_FAVORITE":
           return{
               ...state,
               favorites:[...state.favorites, action.payload]
           }
        default:
            return state
    }
}

const Characters = () => {
    const [characters,setCharacters] = useState([])
    const [favorites,dispatch] = useReducer(favoriteReducer,initialState)

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/').then(res=>res.json()).then(res=>{
            setCharacters(res.results)
        })
    },[])

    const handleClick = (favorite) => {
        dispatch({type:"ADD_TO_FAVORITE",payload:favorite})
    }
    
    return (
      <div className='Characters'>
        {favorites.favorites.map((fav) => (
          <li key={fav.id}>{fav.name}</li>
        ))}
        {characters.map((character) => (
          <div className='item' key={character.id}>
            <h2>{character.name}</h2>
            <button type='button' onClick={() => handleClick(character)}>
              Agregar a Favoritos
            </button>
          </div>
        ))}
      </div>
    );
}
 
export default Characters;