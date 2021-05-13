import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: '',
  }
  

  componentDidUpdate() {
    localStorage.setItem("tarefa", this.state.tarefa);
    
    
  };

  componentDidMount() {
    const taredas = localStorage.getItem("tarefas")

    this.setState({ taredas:""})

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})

  }

  criaTarefa = (event) => {

    const primeiraTarefa = {id: Date.now (), texto: 'tarefa 1', completa: false}

    const copiaDoEstado = [... this.state.tarefas]
    //copiaDoEstado.push (novaTarefa)
  
    this.setState({novaTarefa: event.target.value})

  }
  

  selectTarefa = (id) => {
  //  const novaTarefa = this.state.listaDeTarefas.map((post) => {
  //    if (tarefaId === tarefa.id) {
  //      const novaTarefa = {
  //        ... tarefa,
  //        tarefa: !tarefa.curtido
  //      }
  //      return novaTarefa
  //    } else {
  //      return tarefa
  //    }
  //  })

  //  this.setState({listaDeTarefas: novaListaDeTarefas})

  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})


  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
