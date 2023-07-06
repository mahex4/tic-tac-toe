import React, { useEffect, useState } from 'react'
import Ximg from './Assets/Ximg.svg'
import Oimg from './Assets/Oimg.svg'
import { keyframes, styled } from 'styled-components'

interface GridBoxProps {
  parseClick: (position: number) => Promise<number>
  cellId: number
  gameOver: boolean
  reset: boolean
}

const fadeOutAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface StyledBoxProps {
  hovered: boolean;
  visibility: boolean;
  clicked: boolean
}

const StyledBox = styled.div<StyledBoxProps>`
  margin: 0.5vw;
  width: 10vw;
  height: 10vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeOutAnimation} 0.3s ease-out;


  @media screen and (min-width: 768px) and (orientation: landscape) {
    width: 12vw;
    height: 12vw;
  }

  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 10vh;
    height: 10vh;
  }

  &:hover {
    box-shadow: ${props => props.clicked ? 'none' : '4px 4px 0 #fff'};
    transform: ${props => props.clicked ? 'translate(0px, 0px)' : 'translate(-4px, -4px)'};
    background-color: #${props => props.clicked ? '' : '6f6f6f'};
    color: white;
  }

  &:focus-visible {
    outline-offset: 1px;
  }

  margin-top: 10px;

`

const EmptyBox = styled.div`
    margin: 0.5vw;
  width: 10vw;
  height: 10vw;
`


const StyledImage = styled.img`
    margin: '10px';
    width: 8vw;
    height: 8vw;

    
`

const GridBox: React.FC<GridBoxProps> = ({ parseClick, cellId, gameOver = false, reset = false }) => {
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
    setClicked(false)
    setXActive(true)
    setHovered(false)
    setIsVisible(true)
    setKilled(false)
  }, [reset])

  useEffect(() => {
    const timer = setTimeout(() => {
      setKilled(true)
    }, 500 + cellId * 200)

    return () => {
      clearTimeout(timer)
    }
  }, [cellId, gameOver, isVisible])

  function playClick() {
    // useSoundEffect(Click1)
  }

  if (killed) {
    return (
      <StyledBox
        visibility={isVisible}
        hovered={hovered}
        clicked={clicked}
        onClick={() => {
          playClick()
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