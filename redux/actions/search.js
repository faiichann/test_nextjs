import { SearchActionType } from "../type";

// export const setKeyword = (val = '') =>{
//     return {
//         type: SearchActionType.SET_KEYWORD,
//         data: val
//     }
// }
// export const setSearch = (val = []) =>{
//     return {
//         type: SearchActionType.SET_SEARCH,
//         data: val
//     }
// }
export const setKeyword = (payload) => async dispatch => {
    dispatch({type: SearchActionType.SET_KEYWORD ,payload: payload})
}
export const setSearch = (payload) => async dispatch => {
    dispatch({type: SearchActionType.SET_SEARCH ,payload: payload})
}