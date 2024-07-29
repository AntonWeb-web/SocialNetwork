const ADD_POST_PROFILE = 'ADD_POST_PROFILE'
const ADD_POSTS_PROFILE = 'ADD_POSTS_PROFILE'

export const addPostProfileAction = (payload) => ({
    type: ADD_POST_PROFILE,
    payload
})

export const addPostsProfileAction = (payload) => ({
    type: ADD_POSTS_PROFILE,
    payload
})