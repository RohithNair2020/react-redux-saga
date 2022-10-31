// import { createStore } from 'redux'; //without redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

import productSaga from './sagas/sagaFile';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(productSaga);

export default store;