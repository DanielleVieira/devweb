import React, {useState, useEffect} from "react";
import ItemPesquisa from "./ItemPesquisa";
import './Pesquisa.css';

function Pesquisa(props) {
    
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
    const [pesquisaAtiva, setPesquisaAtiva] = useState(false); 
    // useEffect(
    //     //Faz uma requisição ao backend a partir do value de input
    // // e atualiza resultadosPesquisa
    // );

    function handleFocus() {
        setPesquisaAtiva(false);
    }

    function handleClick() {
        setPesquisaAtiva(true);
    }

    return (
        <div className={props.className} onBlur={handleFocus} onFocus={handleClick}>
            <form className="input-pesquisa">
                <input type="text" name="input-pesquisa" placeholder=" Pesquisa ..."></input>
            </form>
            
            { pesquisaAtiva ?  <div className="container-resultado-pesquisa">
                {
                    resultadoPesquisa.length === 0 ? 
                    <span className="item-pesquisa"> Não encontramos nenhuma fic, sorry 🥲 </span> :
                    
                    resultadoPesquisa.map((historia) => 
                    <ItemPesquisa className="item-pesquisa" 
                    img={historia.img} 
                    titulo={historia.titulo} 
                    autor={historia.autor}></ItemPesquisa>)
                }
            </div>:null}
        </div>
        
    );
}

export default Pesquisa;