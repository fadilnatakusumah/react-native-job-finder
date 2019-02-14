import { AsyncStorage } from 'react-native'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import reducers from '../reducers';



let composeEnhancer = compose;

if (__DEV__) {
    composeEnhancer = window.__REACT_DEVTOOLS_EXTENSION_COMPOSE || compose
}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: '[savedJobs]',
    stateReconciler: autoMergeLevel2
}


const pReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
    pReducer,
    composeEnhancer(applyMiddleware(thunk))
);

export const persistor = persistStore(store)

// const store = createStore(
//     reducers,
//     composeEnhancer(applyMiddleware(thunk))
// )

// export default store;