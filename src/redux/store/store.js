import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { addPostProfileReducer } from './addPostProfileReducer';


const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    posts: addPostProfileReducer,
})

const store = configureStore({
    reducer: {
        rootReducer,
    },
})

export default store