import React from 'react';
import { Stethoscope, Pill, FlaskConical, Brain, Heart, BadgeAlert } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Cardiology',
      description: 'Advanced cardiac care with state-of-the-art facilities'
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: 'Neurology',
      description: 'Expert neurological treatment and care'
    },
    {
      icon: <Pill className="w-8 h-8 text-blue-600" />,
      title: 'Pharmacy',
      description: '24/7 pharmacy with all essential medications'
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
      title: 'Laboratory',
      description: 'Advanced diagnostic and testing facilities'
    },
    {
      icon: <BadgeAlert className="w-8 h-8 text-blue-600" />,
      title: 'Emergency',
      description: 'Round-the-clock emergency medical services'
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: 'General Medicine',
      description: 'Comprehensive medical care for all ages'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Specialities
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive healthcare services provided by expert medical professionals
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">{service.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
              </div>
              <p className="mt-4 text-sm text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}