import { FRUITS } from "@/constants"
import { Cell } from "@/types"

export const testCells = (cells: Cell[]): string => {
    let result = 'pass'

    FRUITS.forEach(fruit => {
        const filteredCells = cells.filter((item) => item.value === fruit)

        if (filteredCells.length !== 2) result = 'Error! Найдена некорректная пара';
    })

    return result;
}