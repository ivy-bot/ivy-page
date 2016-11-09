import NLConstants from "../constants/nlConstants.js";
import {createFetch, base, accept, parseJSON} from "http-client";
import {setColor} from "../actions/templateGenAction";

const fetch = createFetch(
    base(`https://api.projectoxford.ai/luis/v1/application?id=${NLConstants.LUIS_APPLICATION_ID}&subscription-key=${NLConstants.LUIS_SUBSCRIPTION_KEY}&q=`),  // Prefix all request URLs
    accept('application/json'),         // Set "Accept: application/json" in the request headers
    parseJSON()                         // Read the response as JSON and put it in response.jsonData
)

export function fetchColor(action) {
    console.log(action)
    fetch(action.recognized)
        .then(response => {
            if (response.jsonData.entities[0]) {
                var color = response.jsonData.entities[0].entity
                console.log(color)
                setColor(color)
            }


        })
        .catch(response => {
            console.log(response)
        })
}
