import React, { useEffect, useState } from 'react'
import Ximg from './Assets/Ximg.svg'
import Oimg from './Assets/Oimg.svg'
import { keyframes, styled } from 'styled-components'

interface GridBoxProps {
    parseClick: (position: number) => Promise<number>
    cellId: number
    gameOver: boolean
}

const fadeOutAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const StyledBox = styled.div<{ hovered: boolean, visibility: boolean }>`
  margin: 10px;
  width: 10vw;
  height: 10vw;
  background-color: ${(props) => props.hovered ? 'red' : 'wheat'};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => (props.visibility ? fadeOutAnimation : 'none')} 0.3s ease-out;
`

const EmptyBox = styled.div`
    margin: 10px;
  width: 10vw;
  height: 10vw;
`


const StyledImage = styled.img`
    margin: '10px';
    width: 8vw;
    height: 8vw;

    
`

const GridBox: React.FC<GridBoxProps> = ({ parseClick, cellId, gameOver = false }) => {
    const [clicked, setClicked] = useState(false)
    const [xActive, setXActive] = useState(true)
    const [hovered, setHovered] = useState(false)

    const [isVisible, setIsVisible] = useState(true)
    const [killed, setKilled] = useState(false)

    const setActivity = async () => {
        const newVal = await parseClick(cellId) === 1
        setXActive(newVal)
    }

    useEffect(() => {
        console.log('running', gameOver)
        const timer = setTimeout(() => {
            setKilled(true)
        }, 1000 + cellId * 200)

        return () => {
            clearTimeout(timer)
        }
    }, [cellId, gameOver, isVisible])

    if (killed) {
        return (
            <StyledBox
                visibility={isVisible}
                hovered={hovered}
                onClick={() => {
                    setIsVisible(false)
                    if (clicked) return;
                    setClicked(true);
                    setActivity()
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {!clicked ? null : xActive ? <StyledImage src={Ximg} /> : <StyledImage src={Oimg} />}
            </StyledBox>
        );
    }
    else return (<EmptyBox />)
};

export default GridBox