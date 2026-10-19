import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";
import { saveCartToStorage } from "../utils/localStorage";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer:{
        products: productReducer,
        cart : cartReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);
store.subscribe(() =>{
    saveCartToStorage(store.getState().cart.items)
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch