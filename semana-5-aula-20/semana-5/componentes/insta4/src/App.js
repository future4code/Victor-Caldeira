import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Homer-Simpsons'}
          fotoUsuario={'https://i.pinimg.com/originals/08/2a/0a/082a0a90d6f2bee039fd77929c54dd3d.jpg'}
          fotoPost={'https://cdn.awsli.com.br/401/401079/produto/68746259/e8358f0cd0.jpg'}
        />

        <Post
          nomeUsuario={'Lisa-Simpsons'}
          fotoUsuario={'https://gartic.com.br/imgs/mural/bo/boywc12/lisa-simpson.png'}
          fotoPost={'https://desenhos.band.uol.com.br/wp-content/uploads/2018/01/Lisa-meditando.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
