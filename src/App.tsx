import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Hero />
          <Categories />
          <FeaturedProducts />
          <About />
          <Contact />
        </main>
        <footer className="bg-orange-900 text-orange-50 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2024 Sree Rama Enterprises. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;