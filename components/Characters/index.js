import React, { useState, useEffect,useReducer, useMemo } from 'react';

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
    const [search,setSearch] = useState("")
    const [favorites,dispatch] = useReducer(favoriteReducer,initialState)


    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/').then(res=>res.json()).then(res=>{
            setCharacters(res.results)
        })
    },[])

    const handleClick = (favorite) => {
        dispatch({type:"ADD_TO_FAVORITE",payload:favorite})
    }

    // const filteredUsers = characters.filter(user=>{
    //     return user.name.toLowerCase().includes(search.toLowerCase())
    // })
 
    const filteredUsers = useMemo(()=>
        characters.filter(user=>{
            return user.name.toLowerCase().includes(search.toLowerCase())
        })
        ,[characters,search])
    
    return (
      <div className='Characters'>
        {favorites.favorites.map((fav) => (
          <li key={fav.id}>{fav.name}</li>
        ))}

        <div className='search'>
          <input type='text' value={search} onChange={handleSearch} />
        </div>

        {filteredUsers.map((character) => (
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