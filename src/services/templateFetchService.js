import NLConstants from "../constants/nlConstants.js";
import {templateSuccess, templateError} from "../actions/templateFetchActions";
import {createFetch, base, accept, parseJSON} from "http-client";

const fetch = createFetch(
    base(`https://api.projectoxford.ai/luis/v1/application?id=${NLConstants.LUIS_APPLICATION_ID_2}&subscription-key=${NLConstants.LUIS_SUBSCRIPTION_KEY_2}&q=`),  // Prefix all request URLs
    accept('application/json'),         // Set "Accept: application/json" in the request headers
    parseJSON()                         // Read the response as JSON and put it in response.jsonData
)

export function fetchTemplate(action) {
    fetch(action.recognized).then(templateSuccess).catch(templateError)
}
