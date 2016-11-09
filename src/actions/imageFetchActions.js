import AppDispatcher from "../dispatchers/appDispatcher";
import ImageFetchConstants from "../constants/imageFetchConstants.js";
import {fetchImages} from "../services/imageService";

/**
 * Keywords should be a string sperated by a space.
 * Example: "yellow banana fruit jungle"
 *
 * @param keywords Keywords that will be used to search for images on google
 */
export var initFetch = function (keywords) {
    let action = {
        actionType: ImageFetchConstants.IMAGE_FETCH_INIT,
        keywords: keywords
    }
    fetchImages(action)
}

export var fetchSuccess = function (results) {
    AppDispatcher.dispatch({
        actionType: ImageFetchConstants.IMAGE_FETCH_SUCCESS,
        results: results
    })
}

export var fetchError = function (error) {
    AppDispatcher.dispatch({
        actionType: ImageFetchConstants.IMAGE_FETCH_ERROR,
        error: error
    })
}

export var dropboxFetch = function () {
    AppDispatcher.dispatch({
        actionType: ImageFetchConstants.IMAGE_FETCH_SUCCESS,
        results: [
            "https://s17.postimg.org/6jqa6qqin/IMG_8218.jpg",
            "https://s17.postimg.org/m6hjk44an/IMG_8219.jpg", "https://s17.postimg.org/7uy1f7m4f/IMG_0872.jpg",
            "https://s17.postimg.org/hgrlvida7/IMG_8154.jpg",
            "https://s17.postimg.org/65oy756f3/IMG_8215.jpg",
        ]
    })
}
