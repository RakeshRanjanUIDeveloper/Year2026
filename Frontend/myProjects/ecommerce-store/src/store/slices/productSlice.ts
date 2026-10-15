import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product.types";

interface ProductState{
    products:Product[];
    loading:boolean;
    error: string | null;
    selectedProduct : Product | null;
    selectedProductLoading : boolean;
    selectedProductError : string | null
}
const initialState:ProductState = {
    products : [],
    loading:false,
    error:null,
    selectedProduct :null,
    selectedProductLoading:false,
    selectedProductError : null
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        fetchProductsStart : (state) =>{
            state.loading = true;
        },
        fetchProductsSuccess : (state, action:PayloadAction<Product []>) =>{
            state.products = action.payload;
            state.loading = false
        },
        fetchProductsFailure : (state, action: PayloadAction<string>) =>{
            state.error = action.payload;
            state.loading = false
        },
        fetchProductDetailStart : (state, _action: PayloadAction<number>) =>{
            state.selectedProductLoading = true;
            state.selectedProductError = null;
        },
        fetchProductDetailSuccess : (state, action:PayloadAction<Product>)=>{
            state.selectedProduct = action.payload;
            state.selectedProductLoading = false;
        },
        fetchProductDetailFailure : (state, action: PayloadAction<string>) =>{
            state.selectedProductError= action.payload;
            state.selectedProductLoading= false;
        }
    }
})
export default productSlice.reducer;
export const {fetchProductsStart, fetchProductsSuccess, fetchProductsFailure, fetchProductDetailStart, fetchProductDetailSuccess, fetchProductDetailFailure} = productSlice.actions