import React, { FC } from 'react'

interface ButtonProps {
    onClick: () => void
}

const Button: FC<ButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>Restart Game</button>
    )
}

export default Button