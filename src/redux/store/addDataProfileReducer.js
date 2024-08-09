import { initialState } from "./store";

const ADD_DATA_PROFILE = 'ADD_DATA_PROFILE'

export const addDataProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA_PROFILE:
            return {...state, profile: action.payload}
        default:
            return state
    }
}