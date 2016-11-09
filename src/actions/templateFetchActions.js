import AppDispatcher from "../dispatchers/appDispatcher";
import TemplateFetchActions from "../constants/templateFetchConstants";
import {fetchTemplate} from "../services/templateFetchService";

export function initTemplateFetch(recognized) {
    let action = {
        actionType: TemplateFetchActions.TEMPLATE_FETCH_INIT,
        recognized
    }
    fetchTemplate(action)
}

export function templateSuccess(result) {
    AppDispatcher.dispatch({
        actionType: TemplateFetchActions.TEMPLATE_FETCH_SUCCESS,
        result: getType(result)
    })
}

export function templateError(error) {
    AppDispatcher.dispatch({
        actionType: TemplateFetchActions.TEMPLATE_FETCH_ERROR,
        error: error
    })
}

function getType(response) {
    if (response != null) {
        if (response.jsonData.intents[0] != null) {
            return response.jsonData.intents[0].intent;
        }
    }
}

