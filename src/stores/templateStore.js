import AppDispatcher from "../dispatchers/appDispatcher";
import BaseStore from "./baseStore";
import TemplateFetchConstants from "../constants/templateFetchConstants";
import TemplateGenConstants from "../constants/templateGenConstants";
import assign from "object-assign";

var _templateType = '' // as an array of URLs
var _error = ""

var TemplateStore = assign({}, BaseStore, {
    setTemplateType(templateType) {
        _templateType = templateType
    },
    getTemplateType() {
        return _templateType
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
        case TemplateFetchConstants.TEMPLATE_FETCH_SUCCESS:
            TemplateStore.setTemplateType(action.result)
            TemplateStore.setError("")
            TemplateStore.emitChange()
            break
        case TemplateFetchConstants.TEMPLATE_FETCH_ERROR:
            TemplateStore.setError(action.error)
            TemplateStore.emitChange()
            break
        case TemplateGenConstants.RESET:
            TemplateStore.setTemplateType('')
            TemplateStore.setError(action.error)
            TemplateStore.emitChange()
        default:
        // no op
    }
})

export default TemplateStore
