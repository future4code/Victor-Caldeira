import React from "react";
import CriarUsuario from "./Components/CriarUsuario";
import ListaUsuario from "./Components/ListaUsuario";


const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

export default class App extends React.Component {
  state = {
    telaAtual: "lista",


  };

  telaAtual = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <CriarUsuario cadastroUsuario={this.usuarioCadastrado} />
      case "lista":
        return <ListaUsuario usuarioCadastrado={this.cadastroUsuario} />
      default:
        return <p>Recarregue a página - Página não encontrada - Acesso restrito.</p>
    }
  }

  cadastroUsuario = () => {
    this.setState({ telaAtual: "cadastro" })
  }

  usuarioCadastrado = () => {
    this.setState({ telaAtual: "lista" })
  }



  render() {


    return (

      <div>
        {this.telaAtual()}

      </div>
    );
  }
}