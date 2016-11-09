import NLActions from "../constants/nlConstants.js";
import {nlSuccess, nlError} from "../actions/nlActions";

export const fetchNL = (action) => {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open("POST", NLActions.GOOGLE_NL_API_URL + NLActions.GOOGLE_CLOUD_API_KEY)
    xmlhttp.setRequestHeader("Content-Type", "application/json")

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                let data = xmlhttp.responseText
                let resultArray = []
                JSON.parse(data).entities.forEach(result => {
                    if (result.name !== undefined && result.type !== undefined) {
                        resultArray.push({
                            "name": result.name,
                            "type": result.type
                        })
                    }
                })
                nlSuccess(resultArray)
            } else if (xmlhttp.status == 400) {
                nlError("Error 400 returned from Google NL API")
            } else {
                nlError("Server Error: " + xmlhttp.status)
            }
        }
    };

    let data = {
        "document": {
            "type": "PLAIN_TEXT",
            "content": action.text
        },
        "encodingType": "UTF8"
    }

    xmlhttp.send(JSON.stringify(data));
}
