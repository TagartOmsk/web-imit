import { combineReducers } from 'redux';

import categoryReducer from "./categoryReducer";

export default (state = {}, action) => {
    return combineReducers({
        categoryReducer
    })(state, action)
}