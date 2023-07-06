import React, { FC } from 'react'
import { styled } from 'styled-components';

export const StyledButton = styled.button<{ size: string }>`
  outline: 0;
  grid-gap: 8px;
  align-items: center;
  background: 0 0;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-size: ${props => props.size === 's' ? 2 : 4}vw;
  gap: 8px;
  justify-content: center;
  line-height: 1.5;
  overflow: hidden;
  padding: 12px 16px;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all 0.14s ease-out;
  white-space: nowrap;

  background-color: white;

  &:hover {
    box-shadow: 4px 4px 0 #${props => props.size === 's' ? '000' : '6f6f6f'};
    transform: translate(-4px, -4px);
    background-color: #fff;
  }

  &:focus-visible {
    outline-offset: 1px;
  }
`;

const Starter: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <StyledButton size='l' onClick={onClick}>Start Game</StyledButton>
  )
}

export default Starter