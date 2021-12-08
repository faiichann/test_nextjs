import { SearchActionType } from "./searchType";

const INTIAL_STATE = {
    keyword: ''
}
export const searchReducer = (state = INTIAL_STATE, { type, payload = { } }) => {
    console.log(type,payload)
    switch (type) {
        case SearchActionType.SET_KEYWORD:
            return {...state, keyword: payload.keyword}
        default:
            return state
    }
}