import axios from "axios";
import React from "react";


export default class CriarUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
  }

  handleNome = (event) => {
    this.setState({ nome: event.target.value })
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  cadastrarUsuario = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    const body = {
      name: this.state.nome,
      email: this.state.email,
    }

    axios.post(url, body, {
      headers: { Authorization: "victor-cesar-paiva" }
    })

      .then((resposta) => {
        alert("O usuario foi cadastrado")
        this.setState({ nome: "", email: "", })
      })

      .catch((erro) => { alert(erro.response.data.message) })



    // header fica dentro do axios// para ver se esta funcinando e coletar dados, dar console.log() no .then e .catch.
  }


  render() {

    return (
      <div>
        <h1>LabenuSers </h1>

        <button onClick={this.props.cadastroUsuario} > Lista De Cadastro </button>

        <h2> Cadastrar Usuário </h2>

        <input placeholder={"Nome"} value={this.state.nome} onChange={this.handleNome} ></input>

        <input placeholder={"E-mail"} value={this.state.email} onChange={this.handleEmail} ></input>

        <button onClick={this.cadastrarUsuario} >Criar</button>

      </div>
    );
  }
}