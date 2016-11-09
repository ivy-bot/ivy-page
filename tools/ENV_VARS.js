var ENV_VARS

let apiKeys = {
    GOOGLE_SEARCH_ENGINE_ID: "insert-key-here",
    GOOGLE_SEARCH_KEY: "insert-key-here",
    GOOGLE_CLOUD_API_KEY: "insert-key-here",
    LUIS_SUBSCRIPTION_KEY: "insert-key-here",
    LUIS_APPLICATION_ID: "insert-key-here",
    LUIS_SUBSCRIPTION_KEY_2: "insert-key-here",
    LUIS_APPLICATION_ID_2: "insert-key-here",
}

if (process.env.NODE_ENV !== "production") {
    ENV_VARS = {
        API_KEYS: apiKeys
    }
} else {
    ENV_VARS = {
        API_KEYS: apiKeys
    }
}

export default ENV_VARS
