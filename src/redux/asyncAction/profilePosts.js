import { addPostsProfileAction } from "../store/addPostProfileAction"

export const fetchPosts = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/posts')
            .then(response => response.json())
            .then(json => dispatch(addPostsProfileAction(json)))
    }
}
