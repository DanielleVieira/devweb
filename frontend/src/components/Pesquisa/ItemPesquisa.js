
function ItemPesquisa(props) {
    return (
        <div className={props.className}>
            <img src={props.img}/>
            <p>{props.titulo}</p>
            <p>{props.autor}</p>
        </div>
    );
}

export default ItemPesquisa;