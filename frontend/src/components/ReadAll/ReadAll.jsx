import { useEffect, useState } from "react";
import { Api } from "../../api/api";
import ItemCard from "../ItemCard/ItemCard";
import "./ReadAll.css"

function ReadAll() {
    // const itens = [
    //     {
    //         _id: "1234", 
    //         nome: "Item 1",
    //         imagemUrl: "https://picsum.photos/201/201" 
    //     },
    //     {
    //         _id: "9999", 
    //         nome: "Item 2",
    //         imagemUrl: "https://picsum.photos/200/200"
    //     },
    //     {
    //         _id: "5555", 
    //         nome: "Item 3",
    //         imagemUrl: "https://picsum.photos/202/202"
    //     }
    // ];

    // DESCONTRUÇÃO DE ARRAYS
    const [itens, setItens] = useState();

    async function realizarRequest() {
        const readAllUrl = Api.itens.readAll();

        const response = await Api.buildApiGetRequest(readAllUrl);

        const result = await response.json();
        console.log(result);

        setItens(result);
    }

    useEffect(() => {
        realizarRequest();
    }, []);
    

    if (itens === undefined) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="ReadAll">
            {itens.map(function (item, index){
                return <ItemCard key={`item-car-${index}`} item={item} />
            })}
        </div>
    )
}

export default ReadAll;