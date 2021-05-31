import axios from "axios";
import React from "react";
//import styled from "styled-components";

/* const CardUsuario = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-between;
` */



export default class ListaUsuario extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.listaNomeIdUsuario()
    }

    listaNomeIdUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "victor-cesar-paiva"
            }
        })

            .then((resposta) => {
                this.setState({ usuarios: resposta.data })
            })

            .catch((erro) => {
                alert("Dados errados")
            })

    }




    render() {

        /* const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id} > {user.name} </CardUsuario>
        })
 */


        return (
            <div>
                <h1>LabenuSers </h1>

                <button onClick={this.props.usuarioCadastrado} >Inicio</button>

                <h2>Lista de Usuário Cadastrado</h2>


               {/*  {listaUsuarios}
 */}

            </div>
        );
    }
}