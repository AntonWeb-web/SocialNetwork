import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducerPost from './reducer';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';


const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})


const store = configureStore({
    reducer: {
        rootReducer,
    },
})

export default store