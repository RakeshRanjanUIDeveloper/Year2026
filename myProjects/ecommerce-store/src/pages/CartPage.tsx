import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../store/slices/cartSlice";

const CartPage = () => {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-4 text-2xl font-bold">Your cart is empty</h1>
        <p className="mb-6 text-gray-600">
          Add some products to your cart to get started.
        </p>

        <Link
          to="/products"
          className="inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 rounded object-contain"
              />

              <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="mt-1 text-gray-600">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (item.quantity === 1) {
                      dispatch(removeFromCart(item.id));
                    } else {
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      );
                    }
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded border hover:bg-gray-100"
                >
                  −
                </button>

                <span className="w-6 text-center">{item.quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                  className="flex h-8 w-8 items-center justify-center rounded border hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <div className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button
                type="button"
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-lg border p-6">
          <h2 className="mb-6 text-xl font-bold">Order Summary</h2>

          <div className="mb-6 flex items-center justify-between border-b pb-4">
            <span className="text-gray-600">Total</span>
            <span className="text-2xl font-bold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => dispatch(clearCart())}
              className="w-full rounded border border-red-600 px-4 py-3 text-red-600 hover:bg-red-50"
            >
              Clear Cart
            </button>

            <button
              type="button"
              onClick={() => {
                // Checkout will be implemented later.
              }}
              className="w-full rounded bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
