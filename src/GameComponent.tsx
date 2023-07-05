import React, { useRef, useState } from 'react'
import Grid from './Components/Grid'
import { checkDraw, victoryCheck } from './Components/VictoryChecker';

const GameComponent = () => {
    const [xActive, setXActive] = useState(1)
    const xPositions = useRef<number[]>([]);
    const oPositions = useRef<number[]>([]);

    const handleClick = (position: number) => {
        setXActive(-1 * xActive)
        if (xActive > 0) xPositions.current.push(position)
        else oPositions.current.push(position)
        // console.log(xPositions, oPositions)
        if (checkDraw(xPositions.current, oPositions.current)) {
            console.log('draw')
        }
        else {
            if ((xActive && xPositions.current.length < 3) || (!xActive && oPositions.current.length < 3)) return xActive
            console.log(xPositions, oPositions)
            console.log('x :', xActive)
            console.log(victoryCheck(xActive > 0 ? xPositions.current : oPositions.current) ? xActive + 'Wins' : xActive + 'Fails')
        }
        return xActive
    }

    return (
        <Grid handleClick={handleClick} />
    )
}

export default GameComponent