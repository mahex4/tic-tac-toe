import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import './App.css';
import VictoryScreen from './Components/Assets/VictoryScreen';
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
  const [gameOver, setGameOver] = useState(false)
  const [gameRemoved, setGameRemoved] = useState(false)

  const handleGameOver = (xActive: number, win: boolean) => {
    console.log('gameOver', xActive > 0 ? " X " : " O ", win)
    setGameOver(true)
  }

  useEffect(() => {
    if (gameOver) setTimeout(() => {
      setGameRemoved(true)
    }, 4000)
  })

  return (
    <AppDiv>
      <GameHolder>
        {gameRemoved ? <VictoryScreen /> : null}
        <GameComponent gameOver={gameOver} callGameOver={handleGameOver} />
      </GameHolder>
    </AppDiv>
  );
}

export default App;
