import React from 'react';
import { Flag, Shirt, Cross, Book } from 'lucide-react';

export default function Categories() {
  const categories = [
    {
      icon: <Flag className="w-8 h-8" />,
      name: 'Flags & Banners',
      description: 'Traditional religious flags and banners'
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      name: 'Shawls & Garments',
      description: 'Traditional religious attire and shawls'
    },
    {
      icon: <Cross className="w-8 h-8" />,
      name: 'Religious Items',
      description: 'Sacred items for worship and ceremonies'
    },
    {
      icon: <Book className="w-8 h-8" />,
      name: 'Books & Scriptures',
      description: 'Religious texts and spiritual literature'
    }
  ];

  return (
    <section id="categories" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-orange-900 sm:text-4xl">
            Product Categories
          </h2>
          <p className="mt-4 text-lg text-orange-800">
            Explore our wide range of traditional and religious items
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-orange-600 mb-4">{category.icon}</div>
              <h3 className="text-lg font-medium text-orange-900">{category.name}</h3>
              <p className="mt-2 text-sm text-orange-700">{category.description}</p>
              <div className="mt-4">
                <a
                  href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Browse Products →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}