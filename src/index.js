import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';

const feelingSetter = (state = {}, action) => {
    if (action.type === 'ADD_FEELING') {
        return action.payload
    }
    return state
}

const understandingSetter = (state = {}, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload
    }
    return state
}

const supportedSetter = (state = {}, action) => {
    if (action.type === 'ADD_SUPPORTED') {
        return action.payload
    }
    return state
}


const storeInstance = createStore(
    combineReducers({
        feelingSetter,
        understandingSetter,
        supportedSetter
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
    registerServiceWorker();
