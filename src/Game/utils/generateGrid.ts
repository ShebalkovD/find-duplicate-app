import {Cell} from "@/types";
import {FRUITS} from "@/constants";
import {getRandomInt} from "@/Game/utils/getRandomInt";

export const generateGrid = (): Cell[] => {
    let  initialArr = FRUITS;
    const resultArr: Cell[] = [];

    while (initialArr.length > 0) {
        const index = getRandomInt(initialArr.length);
        const fruit = initialArr[index];

        const fruitsInResult = resultArr.filter((item) => item.value === fruit)

        if (fruitsInResult.length < 2) {
            const newItem = {
                id: resultArr.length + 1,
                value: fruit,
            }

            resultArr.push(newItem)
        } else {
            initialArr = initialArr.filter((item) => item !== fruit);
        }
    }

    return resultArr;
}