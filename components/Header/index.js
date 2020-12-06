import React,{useState} from 'react';
import {useTheme} from 'context/theme'

const Header = () => {
    const [darkMode,setDarkMode] = useState(false)
    const color=useTheme()
    const handleClick = () => {
        setDarkMode(!darkMode)
    }
    return ( 
        <div clasName="Header">
            <h1 style={{color}}>React Hooks</h1>
            <button type="button" onClick={handleClick}>{darkMode?'DarkMode':'LightMode'}</button>
            <button type="button" onClick={()=>{setDarkMode(!darkMode)}}>{darkMode?'DarkMode2':'LightMode2'}</button>
        </div>
     );
}
 
export default Header;