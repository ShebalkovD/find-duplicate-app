import { SCORE_TABLE_LOCAL_STORAGE_NAME } from "@/constants";

export const saveScore = (score: number): void => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date);

    const newItem = {
        date: formattedDate,
        score: score,
    }

    const oldValue = localStorage.getItem(SCORE_TABLE_LOCAL_STORAGE_NAME);
    const oldList = oldValue ? JSON.parse(oldValue) : [];

    const newList = [newItem, ...oldList]

    localStorage.setItem(SCORE_TABLE_LOCAL_STORAGE_NAME, JSON.stringify(newList))
}