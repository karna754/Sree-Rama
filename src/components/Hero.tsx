import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-orange-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&q=80"
          alt="Lord Rama and Hanuman"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-orange-100 sm:text-5xl lg:text-6xl text-center">
          Sree Rama Enterprises
        </h1>
        <p className="mt-6 text-xl text-orange-200 max-w-3xl mx-auto text-center">
          Your trusted source for authentic Hindu religious merchandise and traditional items
        </p>
        
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="#products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-900 bg-orange-100 hover:bg-orange-200"
          >
            Shop Now
          </a>
          <a
            href="#categories"
            className="inline-flex items-center px-6 py-3 border border-orange-100 text-base font-medium rounded-md text-orange-100 hover:bg-orange-800"
          >
            View Categories
          </a>
        </div>
      </div>
    </div>
  );
}