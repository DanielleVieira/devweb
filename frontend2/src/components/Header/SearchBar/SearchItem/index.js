import React from "react";

const SearchItem = (props) => {
    return (
        <>
            <a href={props.url}> 
            <img src={props.img} alt='Imagem de elemento resultado da pesquisa'/>
            <div>
                <p>{props.titulo}</p>
                <p>Por: {props.autor}</p>
            </div>
            </a>
        </>
        
    );
}

export default SearchItem;