import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Bhagwa Dhwaj',
    price: 499,
    category: 'Flags',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Silk Angavastram',
    price: 899,
    category: 'Shawls',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Brass Pooja Set',
    price: 1499,
    category: 'Religious Items',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&q=80&w=400'
  },
  // Add more products as needed
];

export default function FeaturedProducts() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Flags', 'Shawls', 'Religious Items'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-orange-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-orange-800">
            Discover our most popular items
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover object-center group-hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-orange-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-orange-700">{product.category}</p>
                </div>
                <p className="text-lg font-medium text-orange-900">
                  ₹{product.price}
                </p>
              </div>
              <button
                onClick={() => addItem({ ...product, quantity: 1 })}
                className="mt-4 w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}