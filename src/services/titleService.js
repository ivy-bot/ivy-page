import ENV_VARS from "../../tools/ENV_VARS";
import {createFetch, base, accept, parseJSON} from "http-client";
import {changeTitle} from "../actions/templateGenAction";

const fetch = createFetch(
    base(`https://api.projectoxford.ai/luis/v1/application?id=${ENV_VARS.API_KEYS.LUIS_APPLICATION_ID}&subscription-key=${ENV_VARS.API_KEYS.LUIS_SUBSCRIPTION_KEY_2}&q=`),  // Prefix all request URLs
    accept('application/json'),         // Set "Accept: application/json" in the request headers
    parseJSON()                         // Read the response as JSON and put it in response.jsonData
)

export function fetchTitle(action) {
    console.log(action)
    fetch(action.recognized)
        .then(response => {
            if (response.jsonData.entities[0]) {
                var title = response.jsonData.entities[0].entity
                console.log(title)
                changeTitle(title)
            }
        })
        .catch(response => {
            console.log(response)
        })
}
