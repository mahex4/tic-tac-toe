import { FC, ReactNode } from 'react'
import GridBox from './GridBox';

interface IGridBox {
    handleClick: (position: number) => number
}

const Grid: FC<IGridBox> = ({ handleClick }) => {
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
                                <GridBox key={colIndex} cellId={cellIndex - 1} parseClick={handleClick} />
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