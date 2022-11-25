import "./Header.css"
import Brand from "../../assets/brand.svg";

function Header (){
    return (
        <div className="Header">
            <link to="/">
                <img src={Brand} width={32} height={32} alt="Samsung Ocean Logo" />
            </link>
            <link to="/">listar

            </link>
            <link to="/adicionar">Adicionar
                
            </link>

        </div>
    )
}

export default Header;