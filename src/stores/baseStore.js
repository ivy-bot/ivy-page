import assign from "object-assign";
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change'

var BaseStore = assign({}, EventEmitter.prototype, {
    dispatchToken: function () {
        return this._dispatchToken
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
})

export default BaseStore