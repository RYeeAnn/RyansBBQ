import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const locations = [
  {
    id: 1,
    name: 'Gastown',
    address: '123 Water Street, Vancouver, BC V6B 1A1',
    phone: '604-555-0101',
  },
  {
    id: 2,
    name: 'Coal Harbour',
    address: '456 West Cordova Street, Vancouver, BC V6B 1E8',
    phone: '604-555-0102',
  },
  {
    id: 3,
    name: 'Yaletown',
    address: '789 Hamilton Street, Vancouver, BC V6B 6A3',
    phone: '604-555-0103',
  },
  {
    id: 4,
    name: 'Main Street',
    address: '321 Main Street, Vancouver, BC V5T 3M9',
    phone: '604-555-0104',
  },
  {
    id: 5,
    name: 'Olympic Village',
    address: '555 Olympic Village Square, Vancouver, BC V5Y 0J7',
    phone: '604-555-0105',
  },
];

const Reservations = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission here
    alert('Reservation request submitted! We will contact you shortly to confirm.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-amber-50/30 to-gray-50">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 pt-24 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <h1 className="text-3xl md:text-4xl font-light text-white tracking-tight text-center mb-3">
            Make a Reservation
          </h1>
          <p className="text-sm text-white/90 text-center max-w-2xl mx-auto">
            Book your table at any of our 5 locations in Vancouver
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            {/* Location Selection */}
            <div className="mb-8">
              <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-3">
                Select Location *
              </label>
              <select
                id="location"
                name="location"
                required
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white text-gray-900"
              >
                <option value="">Choose a location</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name} - {location.address}
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Location Info */}
            {selectedLocation && (
              <div className="mb-8 p-4 bg-gray-50 rounded-md border border-gray-200">
                {(() => {
                  const location = locations.find(loc => loc.id.toString() === selectedLocation);
                  return location ? (
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{location.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{location.address}</p>
                        <p className="text-sm text-gray-600">Phone: {location.phone}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedLocation('')}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ✕
                      </button>
                    </div>
                  ) : null;
                })()}
              </div>
            )}

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={reservationData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-900 mb-2">
                  Time *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={reservationData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
                >
                  <option value="">Select time</option>
                  {[...Array(24)].map((_, i) => {
                    const hour = i + 11;
                    if (hour > 1 && hour < 2) return null; // Closed times
                    const hour12 = hour > 12 ? hour - 12 : hour;
                    const ampm = hour >= 12 ? 'PM' : 'AM';
                    const hour12Str = hour12 === 0 ? 12 : hour12;
                    return (
                      <option key={hour} value={`${hour12Str}:00 ${ampm}`}>
                        {hour12Str}:00 {ampm}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Party Size */}
            <div className="mb-6">
              <label htmlFor="guests" className="block text-sm font-medium text-gray-900 mb-2">
                Party Size *
              </label>
              <select
                id="guests"
                name="guests"
                required
                value={reservationData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={reservationData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={reservationData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="(604) 555-0123"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={reservationData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            {/* Special Requests */}
            <div className="mb-8">
              <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-900 mb-2">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={4}
                value={reservationData.specialRequests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="Any dietary restrictions, accessibility needs, or special occasions?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-6 py-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors font-medium text-center"
            >
              Request Reservation
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-rose-950/10 border-2 border-rose-900/30 rounded-lg">
            <h3 className="text-lg font-medium text-rose-950 mb-4">Have Questions?</h3>
            <p className="text-sm text-gray-700 mb-4">
              For large parties (12+ guests) or special events, please call us directly at{' '}
              <a href="tel:604-555-5555" className="text-gray-900 hover:underline">
                604-555-5555
              </a>
            </p>
            <p className="text-xs text-gray-600">
              We'll confirm your reservation via phone or email within 2 hours of your request.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservations;
