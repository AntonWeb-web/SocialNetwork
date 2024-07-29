import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { customerReducer } from './customerReducer';
import { addPostProfileReducer } from './addPostProfileReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';


const rootReducer = combineReducers({
    customers: customerReducer,
    posts: addPostProfileReducer,
})

const store = configureStore({
    reducer: {
        rootReducer,
    },
}, composeWithDevTools(applyMiddleware(thunk)))

export default store