import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import Main from "./components/main/Main";

// Copy the index.html file
require('file?name=[name].[ext]!./index.html');
require('./index.scss')

ReactDOM.render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path='/' component={Main}/>
    </Router>,
    document.getElementById('root')
)