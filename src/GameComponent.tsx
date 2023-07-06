import React, { FC, useEffect, useRef, useState } from 'react'
import Grid from './Components/Grid'
import { checkDraw, victoryCheck } from './Components/VictoryChecker';

interface GameCompProps {
    gameOver: boolean
    callGameOver: (xActive: number, win: boolean) => void
    callDraw: () => void
    reset: boolean
}


const GameComponent: FC<GameCompProps> = ({ gameOver, callGameOver, reset, callDraw }) => {
    const [xActive, setXActive] = useState(1)
    const xPositions = useRef<number[]>([]);
    const oPositions = useRef<number[]>([]);

    useEffect(() => {
        if (!reset) return
        setXActive(1)
        xPositions.current.splice(0)
        oPositions.current.splice(0)
    }, [reset])

    const handleClick = async (position: number) => {
        setXActive(-1 * xActive)
        if (xActive > 0) xPositions.current.push(position)
        else oPositions.current.push(position)
        if (checkDraw(xPositions.current, oPositions.current)) {
            console.log('draw')
            callDraw()
        }
        else {
            if ((xActive && xPositions.current.length < 3) || (!xActive && oPositions.current.length < 3)) return xActive
            const victoryValue = await victoryCheck(xActive > 0 ? xPositions.current : oPositions.current)
            callGameOver(xActive, victoryValue)
        }
        return xActive
    }

    return (
        <Grid activity={xActive === 1} reset={reset} gameOver={gameOver} handleClick={handleClick} />
    )
}

export default GameComponent