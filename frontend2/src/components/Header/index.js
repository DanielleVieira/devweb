import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './style.css';

const Header = () => {
    return (
        <>
            <header>
                <Logo className='logo'/>
                <nav>
                    <ul>
                        <li><Link to={'/fanfic/create'}>Cadastrar Nova Fanfic</Link></li>
                    </ul>
                </nav>
                <div className='sh-container'>
                    <SearchBar />
                </div>
            </header>
        </>
    );
}

export default Header;