import { Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/profile" element={<ProfilePage />} /> 
         <Route path="/contactus" element={<ContactUs />} />
         <Route path="/login" element={<Login/>} />      
          {/*  routes ke andr jo likhenge wo dynamic hoga */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;