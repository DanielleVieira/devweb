import React, {useState} from "react";
import './Pesquisa.css';
import ListagemPesquisa from "../Listagem/ListagemPesquisa";

function Pesquisa(props) {
    
    const historias = props.historias;
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e);
    }

    const pesquisa = () => {
        if(!query) {
            return [];
        }
        return  historias.filter((historia) => {return historia.titulo.toLowerCase().includes(query.toLowerCase())});
       
    }

    return(
        <div className={props.className}>
            <input type='search' 
            onChange={(e) => handleChange(e.target.value)}>
            </input>
            <ListagemPesquisa listaItens={pesquisa()} className='listagem-pesquisa'/>
        </div>
    );

    
}

export default Pesquisa;



// const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
//     const [pesquisaAtiva, setPesquisaAtiva] = useState(false);
    
//     const handleChange = (inputValue) => {
//         if(inputValue === '') {
//             setResultadoPesquisa([]);
//         } else {
//             const resultado = props.historias.filter((valor) => {return valor.titulo.toLowerCase().includes(inputValue.toLowerCase())});
//             setResultadoPesquisa(resultado);
//         }
//     };
    

//     return (
//         <div className={props.className}>
//             <form className="container-input-pesquisa">
//                 <input type="text" name="input-pesquisa"
//                 placeholder=" Pesquisa ..."
//                 autoComplete="off"
//                 onChange={(e) => handleChange(e.target.value)}
//                 onBlur={() => setPesquisaAtiva(false)}
//                 onFocus={() => setPesquisaAtiva(true)}
//                 ></input>
//             </form>
            
//             {
//                 pesquisaAtiva === true ?
//                 <div className="listagem-pesquisa">
//                 {
//                     resultadoPesquisa.length === 0 ? 
//                     <span className="item-pesquisa"> Não encontramos nenhuma fic, sorry 🥲 </span> :
                    
//                     resultadoPesquisa.slice(0,5).map((historia) => 
//                     <ItemPesquisa className="item-pesquisa" 
//                     img={historia.img} 
//                     titulo={historia.titulo} 
//                     autor={historia.autor}
//                     url={historia.url}></ItemPesquisa>)
//                 }
//             </div>
//             : <></>}

          
//         </div>
        
//     );