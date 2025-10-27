import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Landing = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Location Section */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
                {t('landing.findRyan.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('landing.findRyan.description')}
              </p>
              <Link
                to="/locations"
                className="inline-block text-gray-900 underline underline-offset-4 hover:text-gray-700 transition-colors text-base md:text-lg"
              >
                {t('landing.findRyan.link')}
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="relative w-full">
              <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make a Reservation Section */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative w-full order-2 lg:order-1">
              <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200')",
                  }}
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
                {t('landing.reservation.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('landing.reservation.description')}
              </p>
              <Link
                to="/reservations"
                className="inline-block text-gray-900 underline underline-offset-4 hover:text-gray-700 transition-colors text-base md:text-lg"
              >
                {t('landing.reservation.link')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-gray-900">{t('landing.about.ourStory.title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('landing.about.ourStory.description')}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-light text-gray-900">{t('landing.about.ourMission.title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('landing.about.ourMission.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;

