import { addDataProfileAction } from "../store/addDataProfileAction"

export const fetchProfileData = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/profile')
            .then(response => response.json())
            .then(json => dispatch(addDataProfileAction(json)))
    }
}