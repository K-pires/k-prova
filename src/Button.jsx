function Button({link, nome, descricao, QTD, preco}){
    return(
        <button className='apps'>
              <img src={link} alt={nome} />
              <p className='nome'>{nome}</p>
              <p className='descricao'>{descricao}</p>
              <p className='QTD'>{QTD}</p>
              <p className='preco'>{preco}</p>
        </button>
    );
}

export default Button;