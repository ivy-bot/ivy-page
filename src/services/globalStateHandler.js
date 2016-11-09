import React from "react";
import CounterStore from "../stores/counterStore";
import NLStore from "../stores/nlStore";
import {incrementCounter} from "../actions/counterAction";
import {initTemplateFetch} from "../actions/templateFetchActions";
import {setArticles, initChangeTitle, initChangeColor} from "../actions/templateGenAction";
import {initNL} from "../actions/nlActions";
import {initFetch, dropboxFetch} from "../actions/imageFetchActions";

export const globalStateHandler = (recognized) => {
    let counter = CounterStore.getCounter()

    if (counter == 1) {
        if (recognized.toLowerCase().includes("dropbox")) {
            incrementCounter()
        }
    }
    counter = CounterStore.getCounter()
    var tempCounter = counter;
    if (recognized.toLowerCase().includes("title") || recognized.toLowerCase().includes("timer")) {
        console.log("setting title.. " + recognized)
        counter = 3
    }
    if (recognized.toLowerCase().includes("color") || recognized.toLowerCase().includes("background")) {
        console.log("setting color.. " + recognized)
        counter = 5
    }
    if (recognized.toLowerCase().includes("article")) {
        counter = 4
    }
    switch (counter) {
        case 0:
            initTemplateFetch(recognized)
            incrementCounter()
            break;
        case 1:
            initNL(recognized)
            break;
        case 2:
            dropboxFetch()
            incrementCounter()
            break;
        case 3:
            initChangeTitle(recognized)
            counter = tempCounter
            break;
        case 4:
            console.log("got here")
            setArticles("article")
            incrementCounter()

        case 5:
            initChangeColor(recognized)
            counter = tempCounter
        default:
        // no op
    }

    console.log(counter);
}

export default class GlobalStateHandler extends React.Component {
    constructor(props) {
        super(props)
        console.log("rendered")
        this.keywords = ""
        this.keywordBlacklist = ["website", "blog", "commerce"]
    }

    componentWillMount() {
        NLStore.addChangeListener(this.handleNLResults)
    }

    componentWillUnmount() {
        NLStore.removeChangeListener(this.handleNLResults)
    }

    handleNLResults = () => {
        let nlResults = NLStore.getResults()
        console.log(nlResults)
        nlResults.forEach(result => {
            let legal = true
            this.keywordBlacklist.forEach(blackWord => {
                if (blackWord === result.name) {
                    legal = false
                }
            })

            if (legal) {
                this.keywords = result.name
            }
        })

        console.log(this.keywords)
        initFetch(this.keywords)
    }

    render() {
        return (
            <div></div>
        )
    }
}
