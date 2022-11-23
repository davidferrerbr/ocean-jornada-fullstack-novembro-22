import ItemCard from "../ItemCard/ItemCard";
import "./ReadAll.css"

function ReadAll() {
    const itens = [
        {
            _id: "1234", 
            nome: "Item 1",
            imagemUri: "https://picsum.photos/201/201" 
        },
        {
            _id: "9999", 
            nome: "Item 2",
            imagemUri: "https://picsum.photos/200/200"
        },
        {
            _id: "5555", 
            nome: "Item 3",
            imagemUri: "https://picsum.photos/202/202"
        }
    ];
    console.log(itens);

    return (
        <div className="ReadAll">
            {itens.map(function (item, index){
                return <ItemCard key={`item-car-${index}`} item={item} />
            })}
        </div>
    )
}

export default ReadAll;