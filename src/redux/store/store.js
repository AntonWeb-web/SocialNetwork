import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { addPostProfileReducer } from './addPostProfileReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { addDataProfileReducer } from './addDataProfileReducer';

export const initialState = {
    posts: [],
    profile: []
}


const rootReducer = combineReducers({
    posts: addPostProfileReducer,
    profile: addDataProfileReducer,
})

const store = configureStore({
    reducer: {
        rootReducer,
    },
}, composeWithDevTools(applyMiddleware(thunk)))

export default store