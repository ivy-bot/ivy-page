import AppDispatcher from "../dispatchers/appDispatcher";
import TemplateGenActions from "../constants/templateGenConstants.js";
import {fetchTitle} from "../services/titleService";
import {fetchColor} from "../services/colorService";

export function changeTitle(title) {
    AppDispatcher.dispatch({
        actionType: TemplateGenActions.EDIT_TITLE,
        title: title,
    })
}
export function initChangeTitle(recognized) {
    let action = {
        actionType: TemplateGenActions.INIT_EDIT_TITLE,
        recognized
    }
    fetchTitle(action)
}

export function initChangeColor(recognized) {
    let action = {
        actionType: TemplateGenActions.INIT_EDIT_COLOR,
        recognized
    }
    fetchColor(action)
}

export function changeDescription(description) {
    AppDispatcher.dispatch({
        actionType: TemplateGenActions.EDIT_DESCRIPTION,
        description: description
    })
}

export function setArticles(articles) {
    AppDispatcher.dispatch({
        actionType: TemplateGenActions.SET_ARTICLES,
        articles: articles,
    })
}

export function setColor(color) {
    AppDispatcher.dispatch({
        actionType: TemplateGenActions.CHANGE_COLOR,
        color: color
    })
}

export function reset() {
    AppDispatcher.dispatch({
        actionType: TemplateGenActions.RESET
    })
}
