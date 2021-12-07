import { SearchActionType } from "../type";
import data from "../../data.json"

const INTIAL_STATE = {
    keyword: null,
    search: data
}
export const searchReducer = (state = INTIAL_STATE, { type, payload = { } }) => {
    switch (type) {
        case SearchActionType.SET_KEYWORD:
            return {...state, keyword: payload.keyword}
        case SearchActionType.SET_SEARCH:
            return {...state, search: payload.search}
        default:
            return state
    }
}