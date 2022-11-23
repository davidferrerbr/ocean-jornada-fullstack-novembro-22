import "./ItemCard.css"

function ItemCard(props){
    const item = props.item;

    return (
        <div className="ItemCard">
            <h1>{item.nome}</h1>
            <img src={item.imagemUri} alt={`Imagem do Item ${item.nome}`} />
        </div>
    )
}

export default ItemCard;