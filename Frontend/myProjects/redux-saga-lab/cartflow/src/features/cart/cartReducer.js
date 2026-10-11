import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, REMOVE_FROM_CART } from "./cartActions"

const initialState = {
    cartItems : [],
    itemsChecking : [],
    addedProductIds : [],
    error : null
}

const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART_REQUEST :
            return{
                ...state, 
                itemsChecking:[...state.itemsChecking, action.payload.id]
            }
        case ADD_TO_CART_SUCCESS :
            return{
                ...state,
                itemsChecking:state.itemsChecking.filter((id) => id!== action.payload.id),
                cartItems:[...state.cartItems, action.payload],
                addedProductIds:[...state.addedProductIds, action.payload.id]
            }
        case ADD_TO_CART_FAILURE :
            return {
                ...state,
                itemsChecking: state.itemsChecking.filter((id) => id !== action.payload.id),
                error:action.payload.error
            }
        case REMOVE_FROM_CART :
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
                addedProductIds: state.addedProductIds.filter((id) => id !== action.payload)
            }
        default :
            return state
    }
}

export default cartReducer