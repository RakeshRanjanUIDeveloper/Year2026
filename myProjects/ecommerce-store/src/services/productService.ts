import axios from "axios";
import type { Product } from "../types/product.types";

const apiClient = axios.create({
    baseURL:"https://fakestoreapi.com",
});

export const fetchAllProducts  = async() : Promise<Product[]> =>{
    const response = await apiClient.get("/products");
    return response.data
}