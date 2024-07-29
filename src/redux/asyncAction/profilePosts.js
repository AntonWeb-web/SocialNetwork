import { addPostsProfileAction } from "../store/addPostProfileAction"


export const fetchPosts = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                const data = json.slice(0, 5)
                dispatch(addPostsProfileAction(data))
            })
    }
}