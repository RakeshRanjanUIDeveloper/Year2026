import { all } from "redux-saga/effects";
import watchFetchProducts from "./productSaga";
import watchFetchProductDetail from "./productDetailSaga";

export default function* rootSaga(){
    yield all([
        watchFetchProducts(),
        watchFetchProductDetail()
    ])
}