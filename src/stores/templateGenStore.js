import AppDispatcher from "../dispatchers/appDispatcher";
import BaseStore from "./baseStore";
import TemplateGenConstants from "../constants/templateGenConstants.js";
import assign from "object-assign";

var _title = ''
var _description = ''
var _articles = []
var _color = '#000000'

var TemplateGenStore = assign({}, BaseStore, {
    getTitle() {
        return _title
    },
    setTitle(title) {
        _title = title
    },

    getArticles() {
        return _articles
    },
    setArticles(articles) {
        _articles = articles
    },

    getDescription() {
        return _description
    },
    setDescription(description) {
        _description = description
    },

    getColor() {
        return _color
    },
    setColor(color) {
        _color = color
    },

    reset() {
        _title = ''
        _description = ''
        _articles = []
        _color = '#000000'
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case TemplateGenConstants.EDIT_TITLE:
            TemplateGenStore.setTitle(action.title)
            TemplateGenStore.emitChange()
            break
        case TemplateGenConstants.EDIT_DESCRIPTION:
            TemplateGenStore.setDescription(action.description)
            TemplateGenStore.emitChange()
            break
        case TemplateGenConstants.CHANGE_COLOR:
            TemplateGenStore.setColor(action.color)
            TemplateGenStore.emitChange()
            break
        case TemplateGenConstants.SET_ARTICLES:
            TemplateGenStore.setArticles(action.articles)
            TemplateGenStore.emitChange()
            break
        case TemplateGenConstants.RESET:
            console.log('reset')
            TemplateGenStore.reset()
            TemplateGenStore.emitChange()
            break
        default:
        // no op
    }
})

export default TemplateGenStore
