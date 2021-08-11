import React from "react";


export const CreateTripPage = () => {

    return (
        <div>
            <h4> CreateTripPage </h4>
          
            <input placeholder= {"nome"} ></input>
            
            <input placeholder= {"escolher planeta"} ></input>
  
            <input placeholder= {"data"} ></input>
            
            <input placeholder= {"descrição"} ></input>
            
            <input placeholder= {"tempo de viagem (em dias)"} ></input>
            
            <button /* onClick={} */ > Voltar </button>
            
            <button /* onClick={} */> Criar </button>


        </div>
    )
}