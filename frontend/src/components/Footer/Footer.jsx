import "./Footer.css"

function Footer() {
    const year = new Date().getFullYear();
    return(
        <div className="Footer">
            Todos os direitos Reservados ~ {year}.
        </div>
    )
}

export default Footer;