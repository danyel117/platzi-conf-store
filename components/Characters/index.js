import React, { useState,  useReducer, useMemo, useRef, useCallback } from 'react';
import useCharacters from 'hooks/useCharacters'
import Search from '@components/Search';

const API = 'https://rickandmortyapi.com/api/character/';

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
    const characters = useCharacters(API);
    const [search,setSearch] = useState("")
    const [favorites,dispatch] = useReducer(favoriteReducer,initialState)
    const searchInput = useRef(null)

    // const handleSearch = () => {
    //     setSearch(searchInput.current.value)
    // }
    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
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

        <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>

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