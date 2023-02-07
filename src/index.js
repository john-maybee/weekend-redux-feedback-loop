import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker(); // these two lines randomly generated and put me behind over an hour


const feeling = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } 
    return state;
}

const understanding = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } 
    return state;
}

const support = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    } 
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    } 
    return state;
}

// Redux store! Keeps track of all reducers
const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);