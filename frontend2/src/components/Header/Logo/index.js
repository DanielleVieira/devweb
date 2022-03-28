import React from 'react';
import logo from '../../../assets/logo.png';
import './style.css';

const Logo = () => {
    return (
        <>
            <span className='logo'>
                <img className='logo-img' src={logo} alt="Imagem do Logo"/>
                <span>TsukiFanfiction</span>
            </span>
        </>
    );
}

export default Logo;