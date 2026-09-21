import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProductsStart } from "../store/slices/productSlice";

const ProductsPage = () => {
    const dispatch = useAppDispatch();
    const { products, loading, error } = useAppSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProductsStart());
    }, []);

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="bg-white rounded-2xl p-4 animate-pulse">
                            <div className="bg-gray-200 h-48 rounded-xl mb-4" />
                            <div className="bg-gray-200 h-4 rounded mb-2" />
                            <div className="bg-gray-200 h-4 rounded w-2/3 mb-4" />
                            <div className="bg-gray-200 h-6 rounded w-1/3" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <p className="text-5xl">⚠️</p>
                <p className="text-xl font-semibold text-gray-700">Something went wrong</p>
                <p className="text-gray-500">{error}</p>
                <button
                    onClick={() => dispatch(fetchProductsStart())}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
                <p className="text-gray-500 mt-1">{products.length} items found</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col"
                    >
                        <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center h-48 mb-4">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-full object-contain mix-blend-multiply"
                            />
                        </div>

                        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full w-fit mb-2 capitalize">
                            {product.category}
                        </span>

                        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 flex-1 mb-3">
                            {product.title}
                        </h3>

                        <div className="flex items-center gap-1 mb-3">
                            <span className="text-yellow-400 text-sm">★</span>
                            <span className="text-sm text-gray-600">
                                {product.rating.rate}
                            </span>
                            <span className="text-sm text-gray-400">
                                ({product.rating.count})
                            </span>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xl font-bold text-gray-900">
                                ${product.price.toFixed(2)}
                            </span>
                            <button className="bg-indigo-600 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;