import { all } from "redux-saga/effects";
import watchFetchProducts from "./productSaga";
import watchFetchProductDetail from "./productDetailSaga";
import authSaga from "./authSaga";

export default function* rootSaga(){
    yield all([
        watchFetchProducts(),
        watchFetchProductDetail(),
        authSaga()
    ])
}