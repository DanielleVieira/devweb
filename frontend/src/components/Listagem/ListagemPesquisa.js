import React from "react";
import Item from "./ItemPesquisa/ItemPesquisa";
import "./ListagemPesquisa.css";
import { temaContext } from "../../App";
import { useContext } from "react";


function ListagemPesquisa(props) {
    const listaItens = props.listaItens;
    let temaContexto = useContext(temaContext);
    
    return(
        <div className={props.className} style={{"background-color": temaContexto.tema}}>
            {
                listaItens.slice(0,10).map((historia) => 
                <Item className="item-pesquisa" 
                    img={historia.img} 
                    titulo={historia.titulo} 
                    autor={historia.autor}
                    url={`http://localhost:3001/api/v1/historias/${historia.id}`}></Item>)          
            } 
        </div>
    );

    
}

export default ListagemPesquisa;