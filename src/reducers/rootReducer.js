import { combineReducers } from 'redux';

import categoryReducer from "./categoryReducer";
import categoriesListReducer from "./categoriesListReducer";

export default (state = {}, action) => {
    return combineReducers({
        categoryReducer,
        categoriesListReducer
    })(state, action)
}