import React, { useContext } from 'react';
import ThemaContext from './ThemaContext';
import './style.css';

const ThemeButton = () => {
    const contextThema = useContext(ThemaContext);
    
    const handleClick = () => {
        const state = document.getElementById('bt-thema').checked;
        state === false ? contextThema.setThema('whitesmoke') : contextThema.setThema('black');
    } 

    return (
        <>
            <label className="switch">
            <input type="checkbox" id='bt-thema' onClick={handleClick}/>
            <span className="slider"></span>
            </label>
        </>
    );
}

export default ThemeButton;