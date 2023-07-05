import { styled } from 'styled-components';
import './App.css';
import GameComponent from './GameComponent';

const GameHolder = styled.div`
  display: inline-block;
`

const AppDiv = styled.div`
  background: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppDiv>
      <GameHolder>
        <GameComponent />
      </GameHolder>
    </AppDiv>
  );
}

export default App;
