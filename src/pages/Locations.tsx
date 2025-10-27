import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface LocationData {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string[];
  features: string[];
  mapUrl: string;
}

const locations: LocationData[] = [
  {
    id: 1,
    name: 'Gastown',
    address: '123 Water Street, Vancouver, BC V6B 1A1',
    phone: '604-555-0101',
    hours: ['Monday - Friday: 11:00 AM - 1:00 AM', 'Weekends: 11:00 AM - 2:00 AM'],
    features: ['Historic District', 'Patio Seating', 'Parking Available'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.109323623!3d49.281074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717890!2zV2F0ZXIgU3Q!5e0!3m2!1sen!2sca!4v1234567890'
  },
  {
    id: 2,
    name: 'Coal Harbour',
    address: '456 West Cordova Street, Vancouver, BC V6B 1E8',
    phone: '604-555-0102',
    hours: ['Monday - Friday: 11:00 AM - 1:00 AM', 'Weekends: 11:00 AM - 2:00 AM'],
    features: ['Waterfront views', 'Premium location', 'Valet parking'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.115567623!3d49.281074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717890!2zQ29yZG92YSBTdA!5e0!3m2!1sen!2sca!4v1234567890'
  },
  {
    id: 3,
    name: 'Yaletown',
    address: '789 Hamilton Street, Vancouver, BC V6B 6A3',
    phone: '604-555-0103',
    hours: ['Monday - Friday: 11:00 AM - 1:00 AM', 'Weekends: 11:00 AM - 2:00 AM'],
    features: ['Rooftop patio', 'Private dining room', 'Weekend brunch'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.120891623!3d49.275074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717890!2zSGFtaWx0b24gU3Q!5e0!3m2!1sen!2sca!4v1234567890'
  },
  {
    id: 4,
    name: 'Main Street',
    address: '321 Main Street, Vancouver, BC V5T 3M9',
    phone: '604-555-0104',
    hours: ['Monday - Friday: 11:00 AM - 1:00 AM', 'Weekends: 11:00 AM - 2:00 AM'],
    features: ['Live music', 'Family friendly', 'Outdoor seating'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.100234623!3d49.268074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717890!2zTWFpbiBTdA!5e0!3m2!1sen!2sca!4v1234567890'
  },
  {
    id: 5,
    name: 'Olympic Village',
    address: '555 Olympic Village Square, Vancouver, BC V5Y 0J7',
    phone: '604-555-0105',
    hours: ['Monday - Friday: 11:00 AM - 1:00 AM', 'Weekends: 11:00 AM - 2:00 AM'],
    features: ['Waterfront views', 'Pet friendly patio', 'Event space'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.105123623!3d49.266074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717890!2zT2x5bXBpYyBWaWxsYWdl!5e0!3m2!1sen!2sca!4v1234567890'
  }
];

const Locations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-amber-50/30 to-gray-50">
      <Navigation />
      <section className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 pt-24 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <h1 className="text-3xl md:text-4xl font-light text-white tracking-tight text-center mb-3">
            Our Locations
          </h1>
          <p className="text-sm text-white/90 text-center max-w-2xl mx-auto">
            Experience Ryan's BBQ at 5 convenient locations throughout Vancouver Downtown
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {locations.map((location, index) => (
              <div key={location.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                  <div className="h-64 md:h-80 rounded-lg overflow-hidden">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${location.name} Location Map`}
                    />
                  </div>
                </div>

                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-2'}`}>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-light text-rose-950 mb-3">{location.name}</h2>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-start">
                        <span className="font-medium mr-2 w-16 flex-shrink-0">Address:</span>
                        <span>{location.address}</span>
                      </p>
                      <p className="flex items-start">
                        <span className="font-medium mr-2 w-16 flex-shrink-0">Phone:</span>
                        <a href={`tel:${location.phone}`} className="hover:text-gray-900 transition-colors">
                          {location.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2 text-sm">Hours</h3>
                    <ul className="space-y-0.5 text-sm text-gray-700">
                      {location.hours.map((hour, idx) => (
                        <li key={idx}>{hour}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2 text-sm">Features</h3>
                    <ul className="flex flex-wrap gap-1.5">
                      {location.features.map((feature, idx) => (
                        <li key={idx} className="bg-gray-100 px-2.5 py-0.5 rounded text-xs text-gray-700">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-3">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white px-5 py-2.5 rounded hover:bg-gray-800 transition-colors text-center text-sm font-medium"
                    >
                      Get Directions
                    </a>
                    <a
                      href={`tel:${location.phone}`}
                      className="border border-gray-900 text-gray-900 px-5 py-2.5 rounded hover:bg-gray-900 hover:text-white transition-colors text-center text-sm font-medium"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
