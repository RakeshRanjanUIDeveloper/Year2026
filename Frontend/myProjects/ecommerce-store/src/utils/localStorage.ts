import type { CartItem } from "../store/slices/cartSlice";

const CART_STORAGE_KEY = "cart";
export const loadCartFromStorage =() : CartItem[] =>{
    try {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        if(!storedCart){
            return []
        }
        return JSON.parse(storedCart) as CartItem[]
    } catch (error) {
        return []
    }
}

export const saveCartToStorage  = (cart: CartItem[]) :void =>{
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    } catch (error) {
        console.error("Failed to save cart to localStorage", error)
    }
}