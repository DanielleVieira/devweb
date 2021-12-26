import React, {useState, useEffect} from "react";
import ItemPesquisa from "./ItemPesquisa";
import './Pesquisa.css';

function Pesquisa(props) {
    
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
    const [pesquisaAtiva, setPesquisaAtiva] = useState(false);
    
    const handleChange = (inputValue) => {
        if(inputValue === '') {
            setResultadoPesquisa([]);
        } else {
            
            //Dados de exemplo. Falta implementar a função que pega os dados do backend
            const dados = [
                {
                    url: "#",
                    img: "https://poltronanerd.com.br/wp-content/uploads/2020/09/one-piece.jpg",
                    titulo: "Uma história de One Piece",
                    autor: "Alguém"
                },
                {
                    url: "#",
                    img: "https://poltronanerd.com.br/wp-content/uploads/2020/09/one-piece.jpg",
                    titulo: "Outra história de One Piece",
                    autor: "Alguém"
                },
                {
                    url: "#",
                    img: "https://poltronanerd.com.br/wp-content/uploads/2020/09/one-piece.jpg",
                    titulo: "Mais uma história de One Piece",
                    autor: "Alguém"
                }
            ];
            const resultado = dados.filter((valor) => {return valor.titulo.toLowerCase().includes(inputValue.toLowerCase())});
            setResultadoPesquisa(resultado);
        }
    };
    

    return (
        <div className={props.className}>
            <form className="container-input-pesquisa">
                <input type="text" name="input-pesquisa"
                placeholder=" Pesquisa ..."
                autoComplete="off"
                onChange={(e) => handleChange(e.target.value)}
                onBlur={() => setPesquisaAtiva(false)}
                onFocus={() => setPesquisaAtiva(true)}
                ></input>
            </form>
            
            {
                pesquisaAtiva === true ?
                <div className="listagem-pesquisa">
                {
                    resultadoPesquisa.length === 0 ? 
                    <span className="item-pesquisa"> Não encontramos nenhuma fic, sorry 🥲 </span> :
                    
                    resultadoPesquisa.slice(0,5).map((historia) => 
                    <ItemPesquisa className="item-pesquisa" 
                    img={historia.img} 
                    titulo={historia.titulo} 
                    autor={historia.autor}
                    url={historia.url}></ItemPesquisa>)
                }
            </div>
            : <></>}

          
        </div>
        
    );
}

export default Pesquisa;