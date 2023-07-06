export const victoryCheck = async (positions: number[]): Promise<boolean> => {
    const winScenarios: number[][] = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    const isPresent = await winScenarios.some(subarray => {
        if (positions.length < 3) return false

        console.log(positions)

        if (positions.length === 3) {
            const elementCheck = positions.every(element => {
                return subarray.includes(element)
            })
            console.log(positions, subarray, elementCheck)
            return elementCheck
        }
        else {
            const result = []

            for (let i = 0; i < positions.length; i++) {
                const restArray = positions.filter((_, index) => index !== i);
                result.push(restArray);
            }

            const checkedRes = result.some(elementBig => {
                const checker = subarray.every(element => elementBig.includes(element));
                console.log(checker, subarray, elementBig);
                return checker;
            });



            console.log(checkedRes)
            if (checkedRes) return checkedRes
        }
    }
    );
    console.log(isPresent)

    return isPresent;
}

export function checkDraw(xPositions: number[], oPositions: number[]): boolean {
    return xPositions.length + oPositions.length === 9; // Game is draw if all cells are filled
}
