import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

let composeEnhancer = compose;

if(__DEV__){
    composeEnhancer = window.__REACT_DEVTOOLS_EXTENSION_COMPOSE || compose
}


const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;