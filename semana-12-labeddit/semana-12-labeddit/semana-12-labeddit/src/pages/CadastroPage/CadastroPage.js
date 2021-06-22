import React from "react";
import {Button} from "@material-ui/core";

const CadastroPage = () => {
    return (
        <div>
            <h1> CadastroPage </h1>

            <input placeholder="Nome do Usuário" ></input>

            <input placeholder="Email" ></input>

            <input placeholder="Senha" ></input>


            <Button variant="contained" color="primary">
                CADASTRO
            </Button>

        </div>
    )
}

export default CadastroPage