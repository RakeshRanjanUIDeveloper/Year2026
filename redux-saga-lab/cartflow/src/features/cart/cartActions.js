// Action Types

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

//Action Creators
export const addToCartRequest = (product) => ({
    type: ADD_TO_CART_REQUEST,
    payload: product
})

export const addToCartSuccess = (product) => ({
    type : ADD_TO_CART_SUCCESS,
    payload:product
})

export const addToCartFailure = (error) => ({
    type: ADD_TO_CART_FAILURE,
    payload:error
})

export const removeFromCart = (productId) =>({
    type: REMOVE_FROM_CART,
    payload:productId
})