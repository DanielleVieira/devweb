import React, { useState, useEffect } from 'react';
import Filter from './Filter';
// import './Filters.css';

const Filters = (props) => {
  const [result, setResult] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [fandoms, setFandoms] = useState([]);
  const [selectedFandom, setSelectedFandom] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [status, setStatus] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    (async () => {
      let cat = await fetch(`http://localhost:5000/api/v1/categorias`);
      let gen = await fetch(`http://localhost:5000/api/v1/generos`);
      let sta = await fetch(`http://localhost:5000/api/v1/status`);
      
      cat = await cat.json();
      gen = await gen.json();
      sta = await sta.json();

      setCategorys(cat);
      setGenres(gen);
      setStatus(sta);
    })();
  },[]);

  useEffect(() => {
    (async () => {
      if(selectedCategory) {
        let fand = await fetch(`http://localhost:5000/api/v1/${selectedCategory}/fandoms`);
        fand = await fand.json();
        setFandoms(fand);
      };
    })();
  },[selectedCategory]);

  function handleClick() {
    (async () => {
      const resul = await fetch(`http://localhost:5000/api/v1/filtros/historias?categoria=${selectedCategory}&fandom=${selectedFandom}&genero=${selectedGenre}&status=${selectedStatus}`);
      const historias = await resul.json();
      setResult(historias);
    })();
  }

  return (
    <>
        <form>
          <Filter 
            name='Categoria' 
            id='ft-category' 
            options={categorys}
            onChange={setSelectedCategory}
          />
          <Filter 
            name='Fandom' 
            id='ft-fandoms' 
            options={fandoms}
            onChange={setSelectedFandom}
          />
          <Filter 
            name='Gênero' 
            id='ft-genero' 
            options={genres}
            onChange={setSelectedGenre}
          />
          <Filter 
            name='Status' 
            id='ft-status' 
            options={status}
            onChange={setSelectedStatus}
          />
          <div>{console.log(result)}</div>
        </form>
        <button onClick={handleClick}>Aplicar Filtros</button>
    </>
  );
};

export default Filters