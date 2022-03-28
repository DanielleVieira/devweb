import React from "react";
import './style.css';

const SearchItem = (props) => {
    return (
        <>
            <a  href={props.url}> 
                <div className="sb-item">
                    <img className="sb-item-img" src={props.img} alt='Imagem de elemento resultado da pesquisa'/>
                    <div className="sb-item-text">
                        <p>{props.titulo}</p>
                        <p>Por: {props.autor}</p>
                    </div>
                </div>
                
            </a>
        </>
        
    );
}

export default SearchItem;