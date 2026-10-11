import { takeLatest, call, put } from "redux-saga/effects";
import { fetchProductsFailure, fetchProductsStart, fetchProductsSuccess } from "../slices/productSlice";
import { fetchAllProducts } from "../../services/productService";
import type { Product } from "../../types/product.types";

function* fetchProductsWorker() {
    try {
        const products = (yield call(fetchAllProducts)) as Product[];
        yield put(fetchProductsSuccess(products))
    } catch (error) {
        yield put(fetchProductsFailure(
            error instanceof Error ? error.message : "Failed to fetch products"
        ))
    }
}

function* watchFetchProducts() {
    yield takeLatest(fetchProductsStart.type, fetchProductsWorker)
}

export default watchFetchProducts;