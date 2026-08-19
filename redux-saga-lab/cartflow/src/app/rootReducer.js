import { combineReducers } from "redux";
import cartReducer from "../features/cart/cartReducer";
import productsReducer from "../features/products/productsReducer";


const rootReducer = combineReducers({
    products: productsReducer,
    cart:cartReducer
})

export default rootReducer;