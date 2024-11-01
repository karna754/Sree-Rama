import React, { useState } from 'react';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toggleCart, items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-orange-800 text-orange-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">श्री राम</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-orange-200">Home</a>
            <a href="#categories" className="hover:text-orange-200">Categories</a>
            <a href="#products" className="hover:text-orange-200">Products</a>
            <a href="#about" className="hover:text-orange-200">About</a>
            <a href="#contact" className="hover:text-orange-200">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-orange-700 rounded-full"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-orange-700 rounded-full relative"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 hover:bg-orange-700 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={`${
            isSearchOpen ? 'max-h-20' : 'max-h-0'
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? 'max-h-64' : 'max-h-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-2 space-y-2">
            <a href="#home" className="block px-3 py-2 hover:bg-orange-700 rounded">Home</a>
            <a href="#categories" className="block px-3 py-2 hover:bg-orange-700 rounded">Categories</a>
            <a href="#products" className="block px-3 py-2 hover:bg-orange-700 rounded">Products</a>
            <a href="#about" className="block px-3 py-2 hover:bg-orange-700 rounded">About</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-orange-700 rounded">Contact</a>
          </div>
        </div>
      </div>
      <Cart />
    </nav>
  );
}