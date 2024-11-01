import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { isCartOpen, toggleCart, items, removeItem } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl transform ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="h-full flex flex-col">
        <div className="px-4 py-6 bg-orange-800 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Shopping Cart</h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-orange-700 rounded-full"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-sm font-medium text-gray-900">₹{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 px-4 py-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>₹{total}</p>
          </div>
          <button
            className="mt-6 w-full bg-orange-600 text-white px-4 py-3 rounded-md hover:bg-orange-700 transition-colors"
            onClick={() => alert('Checkout functionality to be implemented')}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}