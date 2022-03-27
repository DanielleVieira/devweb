import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <>
            <header>
                <Logo />
                <nav>
                    <ul>
                        <li><Link to={'/fanfic/create'}>Cadastrar Nova Historia</Link></li>
                    </ul>
                </nav>
                <SearchBar />
            </header>
        </>
    );
}

export default Header;