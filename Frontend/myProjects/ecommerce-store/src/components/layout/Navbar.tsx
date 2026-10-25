import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/slices/authSlice";
import { useToast } from "../../context/ToastContext";

const Navbar = () => {
  const { showToast } = useToast()
  const items = useAppSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div>
        <Link to="/" className="text-xl font-bold text-indigo-600">
          ShopEasy
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="text-gray-600 hover:text-indigo-600 transition-colors"
        >
          Products
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative text-2xl">
          🛒
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </Link>
        {user ? (
          // logged in — show email + logout button
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">{user.email}</span>
            <button
              onClick={() => {
                dispatch(logout())
                showToast("Logged out successfully", "info")
              } 
              }
              className="text-sm text-red-500 hover:text-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          // logged out — show login link
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
