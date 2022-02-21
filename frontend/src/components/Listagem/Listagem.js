import React from "react";
import Item from "./Item/Item";


function Listagem(props) {
    const listaItens = props.listaItens;
    
    return(
        <div className={props.className}>
            {
                listaItens.slice(0,10).map((historia) => 
                <Item className="item-lista" 
                    img={historia.img} 
                    titulo={historia.titulo} 
                    autor={historia.autor}
                    url={`http://localhost:3001/api/v1/historias/${historia.id}`}></Item>)          
            } 
        </div>
    );

    
}

export default Listagem;