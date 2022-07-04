import "./Card.css";

function Card({ foto, nome, nome1, nome2 }) {
    return (
        <div className="paginas">
            <div className="foto-pag">
                <img className="foto" src={foto} />
            </div>
            <div className="name1">
                <div className="nome-pag">
                    <p>{nome}</p>
                </div>
            
                <div className="nome-pag2">
                    <p className="n1">{nome1}</p>
                    <p className="n2">{nome2}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;