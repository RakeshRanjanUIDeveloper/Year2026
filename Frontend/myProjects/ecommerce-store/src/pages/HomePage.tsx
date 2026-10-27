import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProductsStart } from "../store/slices/productSlice";
import { addToCart } from "../store/slices/cartSlice";
import { useToast } from "../context/ToastContext";

const categoryConfig: Record<string, { bg: string; text: string; emoji: string }> = {
    "men's clothing": { bg: "bg-blue-100", text: "text-blue-700", emoji: "👔" },
    "women's clothing": { bg: "bg-pink-100", text: "text-pink-700", emoji: "👗" },
    "jewelery": { bg: "bg-yellow-100", text: "text-yellow-700", emoji: "💍" },
    "electronics": { bg: "bg-purple-100", text: "text-purple-700", emoji: "📱" },
}

const defaultCategory = { bg: "bg-gray-100", text: "text-gray-700", emoji: "🛍️" }

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
        <div className="flex flex-col gap-0 pb-16">

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-500 text-white py-24 px-8 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3" />
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-300 opacity-10 rounded-full" />

                <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 relative z-10">
                    <span className="text-4xl mb-2">🛍️</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        Shop Smarter,<br />
                        <span className="text-yellow-300">Live Better</span>
                    </h1>
                    <p className="text-indigo-200 text-lg max-w-xl mx-auto">
                        Discover thousands of amazing products at unbeatable prices. Fashion, electronics, jewellery and more!
                    </p>
                    <div className="flex items-center justify-center gap-4 flex-wrap mt-2">
                        <Link
                            to="/products"
                            className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors text-base"
                        >
                            Shop Now ✨
                        </Link>
                        <Link
                            to="/cart"
                            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition-colors text-base"
                        >
                            View Cart 🛒
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-yellow-400 py-4 px-8">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 text-gray-900 font-semibold text-sm">
                    <span>🚚 Free Shipping on Orders $50+</span>
                    <span>🔄 Easy 30-Day Returns</span>
                    <span>🔒 Secure Payments</span>
                    <span>⭐ 10,000+ Happy Customers</span>
                </div>
            </section>

            {/* Categories Section */}
            {categories.length > 0 && (
                <section className="max-w-7xl mx-auto px-8 w-full mt-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
                        <p className="text-gray-500 mt-2">Find exactly what you're looking for</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((category) => {
                            const config = categoryConfig[category] ?? defaultCategory
                            return (
                                <Link
                                    key={category}
                                    to="/products"
                                    className={`${config.bg} ${config.text} rounded-2xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer`}
                                >
                                    <span className="text-4xl">{config.emoji}</span>
                                    <span className="capitalize font-semibold text-center text-sm">{category}</span>
                                </Link>
                            )
                        })}
                    </div>
                </section>
            )}

            {/* Featured Products Section */}
            <section className="max-w-7xl mx-auto px-8 w-full mt-16">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">✨ Featured Products</h2>
                        <p className="text-gray-500 mt-1">Handpicked just for you</p>
                    </div>
                    <Link
                        to="/products"
                        className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
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
                                <div className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1">
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

            {/* 3 Feature Cards */}
            <section className="max-w-7xl mx-auto px-8 w-full mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-50 rounded-2xl p-8 flex flex-col gap-3">
                        <span className="text-4xl">🌿</span>
                        <h3 className="font-bold text-green-800 text-lg">Eco Friendly</h3>
                        <p className="text-green-700 text-sm">We partner with sustainable brands that care about our planet.</p>
                    </div>
                    <div className="bg-purple-50 rounded-2xl p-8 flex flex-col gap-3">
                        <span className="text-4xl">💎</span>
                        <h3 className="font-bold text-purple-800 text-lg">Premium Quality</h3>
                        <p className="text-purple-700 text-sm">Every product is carefully curated for quality and value.</p>
                    </div>
                    <div className="bg-orange-50 rounded-2xl p-8 flex flex-col gap-3">
                        <span className="text-4xl">⚡</span>
                        <h3 className="font-bold text-orange-800 text-lg">Fast Delivery</h3>
                        <p className="text-orange-700 text-sm">Get your orders delivered in lightning fast time.</p>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="max-w-7xl mx-auto px-8 w-full mt-16">
                <div className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 rounded-3xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <div className="flex flex-col gap-2">
                        <span className="text-4xl">🎉</span>
                        <h2 className="text-3xl font-extrabold">Ready to start shopping?</h2>
                        <p className="text-red-100">Browse our full collection — new arrivals every week!</p>
                    </div>
                    <Link
                        to="/products"
                        className="bg-white text-red-500 font-bold px-10 py-4 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap text-base"
                    >
                        Browse All Products →
                    </Link>
                </div>
            </section>

        </div>
    )
}
export default HomePage;