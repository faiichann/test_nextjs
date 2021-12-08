import { SearchActionType } from "./searchType";

export const setKeyword = (keyword) => 
    ({type: SearchActionType.SET_KEYWORD ,payload: {keyword}})