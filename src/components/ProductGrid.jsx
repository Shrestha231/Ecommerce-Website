import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />                     // yha sb card ko display kr rha hai
      ))}
    </div>
  );
}