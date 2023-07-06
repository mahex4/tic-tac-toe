import React, { FC, ReactElement } from 'react'
import { styled } from 'styled-components'
import Button from './Button'
import { StyledButton } from './Starter'

const StyledHolder = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Graduate&display=swap');

    background: white;
    position: absolute;
    width: 60vw;
    height: 40vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-style: "Graduate";
    font-size: 5vw;

    z-index: 5;

    border: 1vw solid grey;
`

interface VictoryProps {
    winner: ReactElement
    onClick: () => void
}

const VictoryScreen: FC<VictoryProps> = ({ winner, onClick }) => {
    return (
        <StyledHolder>
            <div className="text-holder">
                {winner}
            </div >
            <StyledButton size='s' onClick={onClick} >Restart Game</StyledButton>
        </StyledHolder>
    )
}

export default VictoryScreen