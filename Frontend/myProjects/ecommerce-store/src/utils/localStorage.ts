import type { User } from "../store/slices/authSlice";
import type { CartItem } from "../store/slices/cartSlice";

const CART_STORAGE_KEY = "cart";
const AUTH_STORAGE_KEY = "auth";
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

export const saveAuthToStorage = (user:User | null):void =>{
    try {
        if(user === null){
            localStorage.removeItem(AUTH_STORAGE_KEY)
        }else{
            localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
        }
    } catch (error) {
        console.error("Failed to save auth to localStorage", error);
    }
}

export const loadAuthFromStorage =():User | null =>{
    try {
        const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
        if(!storedUser){
            return null
        }
        return JSON.parse(storedUser) as User;
    } catch (error) {
        console.error("Failed to load auth from localStorage", error);
        return null;
    }
}