import React from 'react'
import styled from 'styled-components'
import Etapa4 from './componentes/etapa4';
//import Etapa1 from './componentes/etapa1'
//import Etapa2 from './componentes/etapa2'
//import Etapa3 from './componentes/etapa3'
//import Etapa4 from './componentes/etapa4'


/* const Div = styled.div`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center
` */



class App extends React.Component {

  state = {
    etapa: 1,
  }

 /*  renderizaEtapa = () => {
    switch (this.state.evento) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Etapa4 />;

    }
  } */





  render() {

    return (
      <div className="Render" >
        {/* {this.renderizarEtapa() */}}

        <h1> Dados Gerais</h1>

        <p>1. Qual seu nome? </p>
        <input placeholder='digite seu nome'></input>

        <p>2. Qual sua idade? </p>
        <input placeholder='digite sua idade'></input>

        <p >3. Qual seu email? </p>
        <input placeholder='digite seu email'></input>

        <p >4. Qual sua escolaridade? </p>
        <input placeholder='digite sua escolaridade'></input>


        <button > Proxima Etapa</button>


      </div>
    );
  }
}

export default App;
