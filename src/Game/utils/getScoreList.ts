import {SCORE_TABLE_LOCAL_STORAGE_NAME} from "@/constants";

type ScoreList = {
    date: string,
    score: number,
}[]
export const getScoreList = ():ScoreList => {
    const value = localStorage.getItem(SCORE_TABLE_LOCAL_STORAGE_NAME);
    const list = value ? JSON.parse(value) : [];

    return list;
}