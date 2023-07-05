import React, { FC, useRef, useState } from 'react'
import Grid from './Components/Grid'
import { checkDraw, victoryCheck } from './Components/VictoryChecker';

interface GameCompProps {
    gameOver: boolean
    callGameOver: (xActive: number, win: boolean) => void
}

const GameComponent: FC<GameCompProps> = ({ gameOver, callGameOver }) => {
    const [xActive, setXActive] = useState(1)
    const xPositions = useRef<number[]>([]);
    const oPositions = useRef<number[]>([]);

    const handleClick = (position: number) => {
        setXActive(-1 * xActive)
        if (xActive > 0) xPositions.current.push(position)
        else oPositions.current.push(position)
        if (checkDraw(xPositions.current, oPositions.current)) {
            console.log('draw')
        }
        else {
            if ((xActive && xPositions.current.length < 3) || (!xActive && oPositions.current.length < 3)) return xActive
            callGameOver(xActive, victoryCheck(xActive > 0 ? xPositions.current : oPositions.current))
        }
        return xActive
    }

    return (
        <Grid gameOver={gameOver} handleClick={handleClick} />
    )
}

export default GameComponent