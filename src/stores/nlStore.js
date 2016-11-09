import AppDispatcher from "../dispatchers/appDispatcher";
import BaseStore from "./baseStore";
import NLConstants from "../constants/nlConstants.js";
import assign from "object-assign";

var _results = []
var _error = ""

var NLStore = assign({}, BaseStore, {
    getResults() {
        return _results
    },
    setResults(results) {
        _results = results
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
        case NLConstants.NL_SUCCESS:
            console.log(action.result)
            NLStore.setResults(action.result)
            NLStore.setError("")
            NLStore.emitChange()
            break
        case NLConstants.NL_ERROR:
            if (action.error !== "") {
                NLStore.setError(action.error)
                NLStore.emitChange()
            }
            break
        default:
        // no op
    }
})

export default NLStore