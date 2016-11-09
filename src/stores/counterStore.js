import AppDispatcher from "../dispatchers/appDispatcher";
import BaseStore from "./baseStore";
import CounterConstants from "../constants/counterConstants";
import assign from "object-assign";

var _counter = 0

var CounterStore = assign({}, BaseStore, {
    getCounter() {
        return _counter
    },
    setCounter(count) {
        _counter = count
    }
});

AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case CounterConstants.INCREMENT_COUNTER:
            CounterStore.setCounter(_counter + 1)
            CounterStore.emitChange()
            break
        case CounterConstants.DECREMENT_COUNTER:
            CounterStore.setCounter(_counter - 1)
            CounterStore.emitChange()
            break
        default:
        // no op
    }
})

export default CounterStore
