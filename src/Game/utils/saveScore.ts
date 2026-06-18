import {SCORE_TABLE_LOCAL_STORAGE_NAME} from "@/constants";

export const saveScore = (score: number): void => {
    const newItem = {
        date: new Date(),
        score: score,
    }

    const oldValue = localStorage.getItem(SCORE_TABLE_LOCAL_STORAGE_NAME);
    const oldList = oldValue ? JSON.parse(oldValue) : [];

    const newList = [newItem, ...oldList]

    localStorage.setItem(SCORE_TABLE_LOCAL_STORAGE_NAME, JSON.stringify(newList))
}