import { initialState } from "./store"

const ADD_POST_PROFILE = 'ADD_POST_PROFILE'
const ADD_POSTS_PROFILE = 'ADD_POSTS_PROFILE'

export const addPostProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSTS_PROFILE:
            return { ...state, posts: action.payload}
        case ADD_POST_PROFILE:
            return { ...state, posts: [...state.posts, action.payload]}
        default: 
            return state
    }
}
