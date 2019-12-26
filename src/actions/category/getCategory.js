import * as types from '../category/actionTypes'
import {get} from "../../fetcher/fetcher";

export default function (id) {
    return (dispatch) => {
        return get('http://localhost/api/auction/cat/'+id)
            .then(response => dispatch({
                    chosenCategory: response,
                    type: types.CATEGORY_SUCCESS
                })
            ).catch(
                response => dispatch({
                    type: types.CATEGORY_ERROR,
                    error: response
                })
            )
    }
}