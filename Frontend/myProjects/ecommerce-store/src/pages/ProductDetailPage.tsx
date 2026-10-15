import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductDetailStart } from "../store/slices/productSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/slices/cartSlice";

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { selectedProduct, selectedProductLoading, selectedProductError } = useAppSelector((state) => state.products)

    useEffect(() => {
        if (id) {
            dispatch(fetchProductDetailStart(Number(id)))
        }
    }, [id])

    if (selectedProductLoading) {
        return <p className="text-center py-12">Loading product details...</p>
    }

    if (selectedProductError) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500 mb-4">Error: {selectedProductError}</p>
                <Link to="/products" className="text-indigo-600 hover:underline">Back to Products</Link>
            </div>
        )
    }

    if (!selectedProduct) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-600 mb-4">Product not found.</p>
                <Link to="/products" className="text-indigo-600 hover:underline">Back to Products</Link>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <Link to="/products" className="text-indigo-600 hover:underline text-sm mb-6 inline-block">
                ← Back to Products
            </Link>

            <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-10">
                <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center md:w-80 h-80">
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        className="h-full object-contain mix-blend-multiply"
                    />
                </div>

                <div className="flex-1 flex flex-col gap-4">
                    <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full w-fit capitalize">
                        {selectedProduct.category}
                    </span>

                    <h1 className="text-2xl font-bold text-gray-900">
                        {selectedProduct.title}
                    </h1>

                    <p className="text-gray-500 text-sm leading-relaxed">
                        {selectedProduct.description}
                    </p>

                    <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600">{selectedProduct.rating?.rate}</span>
                        <span className="text-sm text-gray-400">({selectedProduct.rating?.count} reviews)</span>
                    </div>

                    <p className="text-3xl font-bold text-gray-900">
                        ${selectedProduct.price.toFixed(2)}
                    </p>

                    <button
                        onClick={() => dispatch(addToCart(selectedProduct))}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors w-fit"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductDetailPage;