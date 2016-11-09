import ImageFetchConstants from "../constants/imageFetchConstants.js";
import reqwest from "reqwest";
import {fetchSuccess, fetchError} from "../actions/imageFetchActions";
var Immutable = require('immutable');

export let fetchImages = (action) => {
    console.log(action.keywords)
    let url = ImageFetchConstants.CUSTOM_SEARCH_URL_1 + action.keywords + ImageFetchConstants.CUSTOM_SEARCH_URL_2

    reqwest({
        url: url,
        type: 'json',
        method: 'get',
        error: function (err) {
            fetchError(err)
        },
        success: function (resp) {
            let urls = []
            resp.items.forEach(image => urls.push(image.link))
            console.log(urls)
            fetchSuccess(urls)
        }
    })
}
