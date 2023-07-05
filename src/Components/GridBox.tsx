import React, { useState } from 'react'
import Ximg from './Assets/Ximg.svg'
import Oimg from './Assets/Oimg.svg'
import { styled } from 'styled-components'

interface GridBoxProps {
    parseClick: (position: number) => number
    cellId: number
}


const StyledBox = styled.div<{ hovered: boolean }>`
    margin: 10px;
  width: 10vw;
  height: 10vw;
  background-color: ${(props) => props.hovered ? 'red' : 'wheat'};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-out; 
`


const StyledImage = styled.img`
    margin: '10px';
    width: 8vw;
    height: 8vw;

    
`

const GridBox: React.FC<GridBoxProps> = ({ parseClick, cellId }) => {
    const [clicked, setClicked] = useState(false)
    const [xActive, setXActive] = useState(true)
    const [hovered, setHovered] = useState(false)

    return (
        <StyledBox
            hovered={hovered}
            onClick={() => {
                if (clicked) return;
                setClicked(true);
                setXActive(parseClick(cellId) === 1)
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {!clicked ? null : xActive ? <StyledImage src={Ximg} /> : <StyledImage src={Oimg} />}
        </StyledBox>
    );
};

export default GridBox