import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProductsStart } from "../store/slices/productSlice";
import { addToCart } from "../store/slices/cartSlice";
import { useToast } from "../context/ToastContext";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state) => state.products);
    const { showToast } = useToast();

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProductsStart())
        }
    }, [])

    const featuredProducts = products.slice(0, 4)
    const categories = [...new Set(products.map((p) => p.category))]

    return (
        <div className="flex flex-col gap-16 pb-16">

            {/* Hero Section */}
            <section className="bg-indigo-600 text-white py-20 px-8">
                <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Discover Amazing Products
                    </h1>
                    <p className="text-indigo-200 text-lg">
                        Shop the latest trends across all categories — fashion, electronics, jewellery and more.
                    </p>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link
                            to="/products"
                            className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
                        >
                            Shop Now
                        </Link>
                        <Link
                            to="/cart"
                            className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            View Cart
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            {categories.length > 0 && (
                <section className="max-w-7xl mx-auto px-8 w-full">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <Link
                                key={category}
                                to="/products"
                                className="capitalize bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full hover:border-indigo-500 hover:text-indigo-600 transition-colors text-sm font-medium"
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* Featured Products Section */}
            <section className="max-w-7xl mx-auto px-8 w-full">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                    <Link
                        to="/products"
                        className="text-indigo-600 hover:underline text-sm font-medium"
                    >
                        View All →
                    </Link>
                </div>

                {featuredProducts.length === 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl p-4 animate-pulse">
                                <div className="bg-gray-200 h-48 rounded-xl mb-4" />
                                <div className="bg-gray-200 h-4 rounded mb-2" />
                                <div className="bg-gray-200 h-4 rounded w-2/3 mb-4" />
                                <div className="bg-gray-200 h-6 rounded w-1/3" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <Link to={`/products/${product.id}`} key={product.id}>
                                <div className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col">
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
                                        <span className="text-sm text-gray-600">{product.rating.rate}</span>
                                        <span className="text-sm text-gray-400">({product.rating.count})</span>
                                    </div>

                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-xl font-bold text-gray-900">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                dispatch(addToCart(product))
                                                showToast("Added to cart!")
                                            }}
                                            className="bg-indigo-600 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors"
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* Banner Section */}
            <section className="max-w-7xl mx-auto px-8 w-full">
                <div className="bg-gray-900 rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-white">Ready to start shopping?</h2>
                        <p className="text-gray-400">Browse our full collection of products across all categories.</p>
                    </div>
                    <Link
                        to="/products"
                        className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
                    >
                        Browse All Products
                    </Link>
                </div>
            </section>

        </div>
    )
}
export default HomePage;