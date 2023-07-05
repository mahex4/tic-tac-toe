import { FC } from 'react'
import GridBox from './GridBox';

interface IGridBox {
    handleClick: (position: number) => number
    gameOver: boolean
}

const Grid: FC<IGridBox> = ({ handleClick, gameOver }) => {
    const rows = 3;
    const cols = 3;
    let cellIndex = 0

    const GridGenerator = () => {

        const board = Array(rows).fill(Array(cols).fill(null));

        return (
            <div>
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex' }}>
                        {row.map((cell: any, colIndex: number) => {
                            cellIndex++;
                            return (
                                <GridBox gameOver={gameOver} key={colIndex} cellId={cellIndex - 1} parseClick={handleClick} />
                            )
                        })}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>{GridGenerator()}</div>
    )
}

export default Grid