import React from "react";
import './style.css';

function BannerItem(props) {
    return (
        <a className="bn-item" href={props.url}>
            <img className="bn-img" src={props.img} alt='Imagem de elemento do banner de fanfics'/>
            <div>
                <h3>{props.title}</h3>
                <p>{props.resume}</p>
                <p>Por: {props.author}</p>
                <p>Categoria: {props.category}</p>
                <p>Fandom: {props.fandom}</p>
                <div>Generos:
                    <ul>
                        {
                            props.genres.map(genre => <li key={`bn-genre-${genre}`}>${genre}</li>)
                        }
                    </ul>
                </div>
                <p>Status: {props.status}</p>
            </div>
        </a>
    );
}

export default BannerItem;