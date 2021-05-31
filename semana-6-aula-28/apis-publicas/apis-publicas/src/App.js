import React from 'react';
import axios from "axios";




export default class App extends React.Component {
  state = {
    activity: {}
  }

  getActivity = () => {
    axios.get("http://www.boredapi.com/api/activity?minprice=0&maxprice=0.1")

      .then((resposta) => {
        this.setState({ activity: resposta.data })
      })
      .catch((erro) => {
        console.log(erro)
      })
  }




  render() {
    return (
      <div className="App" >
        <h1> Mude a rotina do seu Dia !!! </h1>
        <button onClick={this.getActivity} > Clique Aqui </button>
        <p> e execute a atividade proposta. :] </p>
        <hr />

        <h2> Experimentos </h2>

        <p> Atividade a Realizar: {this.state.activity.activity} </p>

        <p> Tipo da Atividade: {this.state.activity.type} </p>

        <p> Quantidade de Pessoas: {this.state.activity.participants} </p>

        <p> Valor: {this.state.activity.price} </p>
        <hr/>

      </div>
    );
  }

}






