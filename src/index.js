import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import logger from 'redux-logger';



const snackReducer = (state = [], action) => {
    if(action.type === 'ADD_SNACK'){
        return [...state, action.payload];
    }

    return state;
} //end snackReducer 

const store = createStore(
    snackReducer,
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();