export const victoryCheck = (positions: number[]): boolean => {
    const winScenarios: number[][] = [
        [0, 1, 2], [0, 3, 6], [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8], [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    // console.log(positions)

    const isPresent = winScenarios.some(subarray => {
        if (positions.length < 3) return false

        console.log(positions)

        return positions.every(element => {
            return subarray.includes(element)
        })
    }
    );

    return isPresent;
}

export function checkDraw(xPositions: number[], oPositions: number[]): boolean {
    return xPositions.length + oPositions.length === 9; // Game is draw if all cells are filled
}
