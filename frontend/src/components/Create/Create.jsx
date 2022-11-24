import { useNavigate } from "react-router-dom";
import { Api } from "../../api/api";
import "./Create.css"


function Create() {
    // SEMPRE TEM QUE SER DECLARO NO INICIO DA PRIMEIRA FUNCTION
    const navigate = useNavigate();
    async function renderSumit(event) {
        // PARA NÃO CARREGAR A PÁGINA DEPOIS DE ENVIAR O FORM
        event.preventDefault();

        const nome = event.target.nome.value;
        const imagemUrl = event.target.imagemUrl.value;

        const payload = {
            nome, 
            imagemUrl
        };

        const createUrl = Api.itens.create();
        const response = await Api.buildApiPostRequest(createUrl, payload);
        const body = await response.json();

        console.log(body);

        if (response.status === 200) {
            alert(body.message);
            navigate("/");
        } else {
            alert("Algum erro ocorreu, tente novamente.");
        }
    }
    return(
        <div className="Create">
            <form onSubmit={renderSumit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="texto" id="nome"></input>
                </div>

                <div>
                    <label htmlFor="imagemUrl">URL da Imagem:</label>
                    <input type="text" id="imagemUrl"></input>
                </div>

                <div>
                    <input type="submit" value="Adicionar" />
                </div>
            </form> 
        </div>
    )
}

export default Create;