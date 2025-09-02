import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();                         //multiple pages me jb call krenge to usedispatch ka use hoga

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow-md">
      <img src={product.image} alt={product.name} className="h-32 mb-2" />
      <h3 className="font-semibold">{product.name}</h3>
      <p>Rs.{product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>   
  );
}        