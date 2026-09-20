import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProductsStart } from "../store/slices/productSlice";

const ProductsPage = () =>{
    const dispatch = useAppDispatch();
    const {products, loading, error} = useAppSelector((state) => state.products)

    useEffect(()=>{
        dispatch(fetchProductsStart());
    },[])
    if(loading){
        return <p>Loading...</p>
    }
    if(error !== null){
        return <p>{error}</p>
    }
    return (
        <div>
             {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    )
}
export default ProductsPage;