import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer:{
        products: productReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch