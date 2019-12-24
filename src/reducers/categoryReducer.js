import * as types from '../actions/category/actionTypes';

const initialState = {
    chosenCategory: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CATEGORY_SUCCESS:
            return {...state, chosenCategory: action.chosenCategory}
        case types.CATEGORY_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}