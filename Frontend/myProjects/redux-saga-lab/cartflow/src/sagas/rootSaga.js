import {all} from 'redux-saga/effects'
import { watchFetchProducts } from '../features/products/productsSaga'
import { watchAddToCart } from '../features/cart/cartSaga'
export default function* rootSaga(){
    yield all([
        watchFetchProducts(),
        watchAddToCart()
    ])
}