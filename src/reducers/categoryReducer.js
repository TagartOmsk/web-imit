import * as types from '../actions/category/actionTypes';

const initialState = {
    chosenCategory: null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CATEGORY_SUCCESS:
            console.log('reducer', action.chosenCategory);
            return {...state, chosenCategory: action.chosenCategory}
        case types.CATEGORY_ERROR:
            console.log('reducer error', action.chosenCategory);
            return {...state, error: action.error}
        default:
            return state
    }
}