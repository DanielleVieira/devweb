import React, { useState, useEffect } from "react";
import SearchItem from "./SearchItem";

const SearchBar = (props) => {
    
    const [fanfics, setFanfics] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:5000/api/v1/historias');
            const fics  = await resp.json();
            setFanfics(fics);
        }
        fetchData();
      }, []);


    const handleChange = (e) => {
        setQuery(e);
    }

    const search = () => {
        if(!query) {
            return [];
        }
        return  fanfics.filter((fic) => {return (fic.titulo.toLowerCase().includes(query.toLowerCase())
            || fic.autor.toLowerCase().includes(query.toLowerCase()))});
       
    }

    return(
        <>
            <input type='search' 
            onChange={(e) => handleChange(e.target.value)}>
            </input>
            <ul>
            {
                search().slice(0,10).map((fic) => 
                    <li key={`sh-${fic.id}`}>
                        <SearchItem 
                            img={fic.img} 
                            titulo={fic.titulo} 
                            autor={fic.autor}
                            url={`http://localhost:5000/api/v1/historias/${fic.id}`}/>
                    </li>
                )          
            } 
            </ul>

        </>
    );
}

export default SearchBar;