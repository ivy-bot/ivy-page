import AppDispatcher from "../dispatchers/appDispatcher";
import BaseStore from "./baseStore";
import ImageFetchConstants from "../constants/imageFetchConstants.js";
import assign from "object-assign";

var _images = [] // as an array of URLs
var _error = ""

var ImageStore = assign({}, BaseStore, {
    setImages(images) {
        _images = images
    },
    getImages() {
        return _images
    },
    getError() {
        return _error
    },
    setError(error) {
        _error = error
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case ImageFetchConstants.IMAGE_FETCH_SUCCESS:
            ImageStore.setImages(action.results)
            ImageStore.setError("")
            ImageStore.emitChange()
            break
        case ImageFetchConstants.IMAGE_FETCH_ERROR:
            ImageStore.setError(action.error)
            ImageStore.emitChange()
            break
        default:
        // no op
    }
})

export default ImageStore