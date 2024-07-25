

const ADD_POST = 'ADD_POST'

const addPostAction = (post) => ({
    type: ADD_POST,
    payload: post
})

export default addPostAction