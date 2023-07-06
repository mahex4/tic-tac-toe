import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import './App.css';
import Starter from './Components/Assets/Starter';
import VictoryScreen from './Components/Assets/VictoryScreen';
import GameComponent from './GameComponent';

const GameHolder = styled.div<{ killed: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  pointer-events: ${props => props.killed ? 'none' : ''};

  height: 98vh;
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
  const [winner, setWinner] = useState(<></>)
  const [reset, setReset] = useState(false)

  const [startGame, setStartGame] = useState(false)

  const handleGameOver = (xActive: number, win: boolean) => {
    if (!win) return
    setWinner(xActive > 0 ? <>X has won the game</> : <>O has won the game</>)
    console.log('gameOver', xActive > 0 ? " X " : " O ", win)
    setGameOver(true)
  }

  const handleStart = () => {
    setStartGame(true)
  }

  const handleDraw = () => {
    setWinner(<>The game is a draw</>)
    setGameOver(true)
  }

  useEffect(() => {
    if (gameOver) setTimeout(() => {
      setGameRemoved(true)
    }, 500)
  }, [gameOver])

  useEffect(() => {
    if (!reset) return
    setGameOver(false)
    setGameRemoved(false)
    setWinner(<></>)
    setReset(false)
  }, [reset])


  return (
    <AppDiv>
      {gameRemoved ? <VictoryScreen onClick={() => setReset(true)} winner={winner} /> : null}
      {startGame ?
        <GameHolder killed={gameOver}>
          <GameComponent reset={reset} gameOver={gameOver} callGameOver={handleGameOver} callDraw={handleDraw} />
        </GameHolder> :
        <Starter onClick={handleStart} />
      }

    </AppDiv>
  );
}

export default App;
