import React from 'react';

export default function Doctors() {
  const doctors = [
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Cardiologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
      experience: '15+ years'
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Neurologist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80',
      experience: '12+ years'
    },
    {
      name: 'Dr. Anita Reddy',
      specialty: 'Pediatrician',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80',
      experience: '10+ years'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Expert Doctors
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet our team of experienced healthcare professionals
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  src={doctor.image}
                  alt={doctor.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{doctor.name}</h3>
                  <p className="text-sm mt-2">{doctor.specialty}</p>
                  <p className="text-sm mt-1">Experience: {doctor.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}