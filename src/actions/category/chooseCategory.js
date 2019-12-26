import * as types from '../category/actionTypes'

export default function (category) {
    return (dispatch) => {
        dispatch({
            chosenCategory: category,
            type: types.CATEGORY_SUCCESS
        })
    }
}