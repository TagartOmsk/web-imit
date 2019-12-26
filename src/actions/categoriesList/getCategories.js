import * as types from '../categoriesList/actionTypes'
import {get} from "../../fetcher/fetcher";

export default function () {
    return (dispatch) => {
        return get('api/auction/cat/')
            .then(response => dispatch({
                    categories: response,
                    type: types.CATEGORY_LIST_SUCCESS
                })
            ).catch(
                response => dispatch({
                    type: types.CATEGORY_LIST_ERROR,
                    error: response
                })
            )
    }
}