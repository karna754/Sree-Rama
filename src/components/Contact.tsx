import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-orange-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-orange-800">
            Get in touch with us for any queries or bulk orders
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-orange-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-orange-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-orange-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-orange-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-orange-800">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-orange-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-orange-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-orange-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-medium text-orange-900">Address</p>
                  <p className="text-orange-800">123 Temple Street, Hyderabad - 500001</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="flex-shrink-0 w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-medium text-orange-900">Phone</p>
                  <p className="text-orange-800">+91 40 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="flex-shrink-0 w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-medium text-orange-900">Email</p>
                  <p className="text-orange-800">info@sreeramaenterprises.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="flex-shrink-0 w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-medium text-orange-900">Business Hours</p>
                  <p className="text-orange-800">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-orange-800">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}