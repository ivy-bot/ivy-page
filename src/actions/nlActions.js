import AppDispatcher from "../dispatchers/appDispatcher";
import NLActions from "../constants/nlConstants.js";
import {fetchNL} from "../services/nlService";

export function initNL(text) {
    let action = {
        actionType: NLActions.NL_INIT,
        text: text
    }
    fetchNL(action)
}

export function nlSuccess(result) {
    AppDispatcher.dispatch({
        actionType: NLActions.NL_SUCCESS,
        result: result
    })
}

export function nlError(error) {
    AppDispatcher.dispatch({
        actionType: NLActions.NL_ERROR,
        error: error
    })
}
