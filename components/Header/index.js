import React,{useState} from 'react';

const Header = () => {
    const [darkMode,setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }
    return ( 
        <div clasName="Header">
            <h1>React Hooks</h1>
            <button type="button" onClick={handleClick}>{darkMode?'DarkMode':'LightMode'}</button>
            <button type="button" onClick={()=>{setDarkMode(!darkMode)}}>{darkMode?'DarkMode2':'LightMode2'}</button>
        </div>
     );
}
 
export default Header;