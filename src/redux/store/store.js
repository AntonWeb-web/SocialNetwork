import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { addPostProfileReducer } from './addPostProfileReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

export const initialState = {
    posts: []
}

const rootReducer = combineReducers({
    posts: addPostProfileReducer,
})

const store = configureStore({
    reducer: {
        rootReducer,
    },
}, composeWithDevTools(applyMiddleware(thunk)))

export default store