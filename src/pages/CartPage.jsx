import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../features/cart/cartSlice";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between border-b py-2">
            <p>{item.name} (Rs.{item.price})</p>
            <div className="flex gap-2">
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">x</button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border rounded-lg shadow-md w-64">
        <h3 className="font-bold text-lg">Order Summary</h3>
        <p>Subtotal: Rs.{total.toFixed(2)}</p>
        <p>Shipping: Free</p>
        <p className="font-bold">Total: Rs.{total.toFixed(2)}</p>
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}