import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
            <div>
                <Link to="/" className="text-xl font-bold text-indigo-600">ShopEasy</Link>
            </div>
            <div className="flex items-center gap-6">
                <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
                <Link to="/products" className="text-gray-600 hover:text-indigo-600 transition-colors">Products</Link>
            </div>
            <div>
                <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Login</Link>
            </div>
        </nav>
    )
}
export default Navbar;