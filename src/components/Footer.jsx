import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">audiophile</h2>
          <p className="text-sm text-gray-200">
            Your one-stop shop for Men, Women, and Kids fashion. Stylish, Affordable, Trendy.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/men" className="hover:underline">Men</a></li>
            <li><a href="/women" className="hover:underline">Women</a></li>
            <li><a href="/kids" className="hover:underline">Kids</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">📍 New Delhi, India</p>
          <p className="text-sm">📞 +91 9876543210</p>
          <p className="text-sm">✉ support@audiophile.com</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 border-t border-gray-400 pt-4 text-center text-sm">
        © {new Date().getFullYear()} audiophile. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;