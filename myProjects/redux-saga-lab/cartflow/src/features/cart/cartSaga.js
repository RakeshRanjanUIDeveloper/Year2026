import { takeEvery, call, put } from "redux-saga/effects";
import { ADD_TO_CART_REQUEST, addToCartFailure, addToCartSuccess } from "./cartActions";


//Worker Saga
function* addToCartSaga(action){
        try {
            //yield pause the saga and waits for the result before moving to the next line
            //call tells saga to call a function like fetch and wait for its response
            const response = yield call(fetch, `https://dummyjson.com/products/${action.payload.id}`);
           
            const product = yield call([response, response.json])
            if(product.stock >0){
                //put tells saga to dispatch an action to Redux Store
                yield put(addToCartSuccess(product))
            }else{
                yield put(addToCartFailure({id:action.payload.id, error: "Out of stock!"}))
            }
        } catch (error) {
            yield put(addToCartFailure({id:action.payload.id, error:error.message}))
        }
}
//Watcher Saga
export function* watchAddToCart(){
    //takeEvery - Listens for every ADD_TO_CART_REQUEST action and calls worker each time
    yield takeEvery(ADD_TO_CART_REQUEST, addToCartSaga)
}