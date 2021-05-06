import React from 'react'
import './CardePequeno.css'

function CardePequeno(props) {
    return (
        <div className="carde-contato">
            <img src={ props.imagem }/>
            <p>{ props.descricao }</p>
            
        </div>

    )
}

export default CardePequeno;