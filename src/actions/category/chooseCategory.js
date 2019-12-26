import * as types from '../category/actionTypes'
import {get} from "../../fetcher/fetcher";

export default function (category) {
    return (dispatch) => {
        return get('api/auction/cat/'+category.id)
            .then(response => dispatch({
                    chosenCategory: response.category,
                    type: types.CATEGORY_SUCCESS
                })
            ).catch(
                response => dispatch({
                    type: types.CATEGORY_ERROR,
                    error: response.error
                })
            )
    }
}