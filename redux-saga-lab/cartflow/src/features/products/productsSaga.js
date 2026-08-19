import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_PRODUCTS_REQUEST, fetchProductsFailure, fetchProductsSuccess } from "./productsActions";

//Worker Saga
function* fetchProductSaga(){
    try{
        const response = yield call(fetch, 'https://dummyjson.com/products?limit=10');
        const data = yield call([response, response.json]);
        yield put(fetchProductsSuccess(data.products));
    }catch(error){
        yield put(fetchProductsFailure(error.message))
    }
}

//Watcher Saga
export function* watchFetchProducts(){
    yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductSaga)
}