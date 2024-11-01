import React from 'react';
import { Heart, Shield, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-orange-600" />,
      title: 'Devotion',
      description: 'We serve with utmost devotion and respect for our traditions'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: 'Quality',
      description: 'We ensure the highest quality in all our products'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: 'Authenticity',
      description: 'All our items are authentic and traditionally crafted'
    }
  ];

  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-orange-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-orange-800 max-w-3xl mx-auto">
            Sree Rama Enterprises has been serving the community for over two decades,
            providing authentic religious merchandise with devotion and commitment.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-medium text-orange-900 text-center">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-orange-700 text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-orange-900">Our Story</h3>
              <p className="mt-4 text-orange-800">
                Founded in 2000, Sree Rama Enterprises began with a simple mission:
                to provide authentic religious merchandise to devotees. Over the years,
                we have grown to become a trusted name in the community, serving
                thousands of customers with dedication and respect for our traditions.
              </p>
              <p className="mt-4 text-orange-800">
                We take pride in sourcing our products from skilled artisans who
                craft each item with devotion and attention to detail, ensuring
                that our customers receive only the finest quality merchandise.
              </p>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&q=80"
                alt="Traditional craftsmanship"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}