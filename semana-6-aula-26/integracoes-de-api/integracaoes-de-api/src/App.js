import React from "react";
import axios from "axios";


const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

export default class App extends React.Component {
  state = {
    listaUsuario: [],
    inputName: "",
    inputEmail: "",
  };

  componentDidMount() {
    this.getListaUsuario();
  }

  handleName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  getListaUsuario = () => {
    const header = {
      headers: {
        Authorization: "victor-cesar-paiva"
      }
    };

    axios
      .get(BASE_URL, header)
      .then((res) => {
        this.setState({ listaUsuario: res.data.result.list });
      })
      .catch((err) => {
        alert("Não foi possivel criar cadastro. Tente novamente.");
      });
  };

  createListaUsuario = () => {
    const header = {
      headers: {
        Authorization: "victor-cesar-paiva"
      }
    };

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(BASE_URL, body, header)
      .then(() => {
        alert("O usuario foi criado com sucesso");
        this.setState({ inputName: "" });
        this.setState ({ inputEmail: ""});
        this.getListaUsuario();
      })
      .catch((err) => {
        alert();
      });
  };

  render() {
    const ListaUsuarioComponents = this.state.listaUsuario.map((play) => {
      return <li key={play.id}>{play.name} - {play.email} </li>;
    });

    return (
      <div>
        <h1>LabenuSers </h1>

        <button onClick={this.createListaUsuario}>Trocar de Página</button>

        <h2> Criar Usuário</h2>

        <input placeholder={"insira seu nome"} value={this.state.inputName} onChange={this.handleName} />
        <input placeholder={"insira seu E-mail"} value={this.state.inputEmail} onChange={this.handleEmail} />

        <button onClick={this.createListaUsuario}>Criar</button>

        {ListaUsuarioComponents}
        
      </div>
    );
  }
}