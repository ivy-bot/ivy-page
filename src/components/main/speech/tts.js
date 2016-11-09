import React from "react";
import ReactAudioPlayer from "react-audio-player";
var apiKey = ''

function _getKey(c) {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open("POST", "https://oxford-speech.cloudapp.net/token/issueToken")
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                apiKey = JSON.parse(xmlhttp.responseText).access_token
                c()
            } else if (xmlhttp.status == 400) {
                console.log("Error 400 returned from MS Speech API")
            } else {
                console.log("Server Error: " + xmlhttp.status)
            }
        }
    };

    let data = "grant_type=client_credentials&client_id=e8372415fade4edda205fc9f78841ecb&client_secret=e8372415fade4edda205fc9f78841ecb&scope=https%3A%2F%2Fspeech.platform.bing.com"

    xmlhttp.send(JSON.stringify(data));
}

var Sound = (function () {
    var df = document.createDocumentFragment();
    return function Sound(data) {
        return (
            <ReactAudioPlayer
                src={data}
                autoPlay="true"
            />
        )
    }
}());

const speakCallback = (text, callback) => {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open("POST", "https://speech.platform.bing.com/synthesize")
    xmlhttp.setRequestHeader("Authorization", "Bearer " + apiKey)
    xmlhttp.setRequestHeader("X-Microsoft-OutputFormat", "raw-8khz-8bit-mono-mulaw")
    xmlhttp.setRequestHeader("Content-Type", "application/ssml+xml")

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                let sound = xmlhttp.responseText
                let audio = new Sound(sound)
                callback(audio)
            } else if (xmlhttp.status == 400) {
                console.log("Error 400 returned from MS Speech API")
            } else {
                console.log("Server Error: " + xmlhttp.status)
            }
        }
    };

    let data = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xml:lang="en-CA"><voice name="Microsoft Server Speech Text to Speech Voice (en-CA, Linda)">Welcome to Microsoft Text-To-Speech Online Demo.</voice></speak>`
    xmlhttp.send(data);
}

export default function speak(text, c) {
    if (apiKey === '') {
        _getKey(() => speakCallback(text, c))
    }
}
