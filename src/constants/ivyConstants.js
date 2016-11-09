import ENV_VARS from "../../tools/ENV_VARS";

export default {
    CUSTOM_SEARCH_URL_1: "https://www.googleapis.com/customsearch/v1?q=",
    CUSTOM_SEARCH_URL_2: "&searchType=image&cx=" + ENV_VARS.API_KEYS.GOOGLE_SEARCH_ENGINE_ID + "&key=" + ENV_VARS.API_KEYS.GOOGLE_SEARCH_KEY + "&imgSize=large",
    IMAGE_FETCH_INIT: 'IMAGE_FETCH_INIT',
    IMAGE_FETCH_SUCCESS: 'IMAGE_FETCH_SUCCESS',
    IMAGE_FETCH_ERROR: 'IMAGE_FETCH_ERROR'
}