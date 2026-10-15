import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchProductById } from "../../services/productService";
import type { Product } from "../../types/product.types";
import { call, put, takeLatest } from "redux-saga/effects"
import { fetchProductDetailFailure, fetchProductDetailStart, fetchProductDetailSuccess } from "../slices/productSlice";

function* fetchProductDetailWorker(action:PayloadAction<number>){
     // action.payload is the id
     try {
         const product = (yield call(fetchProductById, action.payload)) as Product
         yield put(fetchProductDetailSuccess(product))
     } catch (error) {
        yield put(fetchProductDetailFailure(
            error instanceof Error ? error.message : "Failed to fetch product"
        ))
     }
    
}

function* watchFetchProductDetail(){
    yield takeLatest(fetchProductDetailStart.type, fetchProductDetailWorker)
}
export default watchFetchProductDetail