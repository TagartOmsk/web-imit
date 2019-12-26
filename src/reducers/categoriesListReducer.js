import * as types from '../actions/categoriesList/actionTypes';

const initialState = {
    categories: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CATEGORY_LIST_SUCCESS:
            return {...state, categories: action.categories};
        case types.CATEGORY_LIST_ERROR:
            return {...state, error: action.error};
        default:
            return state
    }
}