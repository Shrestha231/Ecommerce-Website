import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <Link to="/" className="font-bold text-2xl">Shopzy</Link>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
         <Link to="/men">Men</Link> 
         <Link to="/women">Women</Link> 
         <Link to="/kids">Kids</Link> 
         <Link to="/contactus">Contact Us</Link> 
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}