import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/Logo.png';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Food Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-rose-900 via-rose-950 to-rose-950 relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/30 to-transparent pointer-events-none z-0" />
        {/* Logo at top left */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
          <img src={logo} alt="Ryan's BBQ" className="h-16 md:h-20 lg:h-24 w-auto" />
        </div>

        {/* Food Images Container */}
        <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-12 space-y-6 relative z-10 pt-32 md:pt-36">
          {/* Food images arrangement */}
          <div className="grid grid-cols-2 gap-4 md:gap-5 w-full max-w-md md:max-w-lg">
            {/* Top - large dish */}
            <div className="col-span-2">
              <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800" 
                  alt="BBQ Ribs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bottom left dish */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-square">
                <img 
                  src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90406/mini-trinity-bbq-combo-brisket-ribs-and-links.245582f593bf64b23b57dfca2be18cfd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1" 
                  alt="Mini Trinity BBQ Combo - Brisket, Ribs & Links"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Bottom right dish */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-square">
                <img 
                  src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114307/ribeye-prime-steak-gift-box.e74cb016baabbb2df73861de8150f29c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1" 
                  alt="Ribeye Prime Steak Gift Box"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Left Edge */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 space-y-4 z-20">
          <a href="#" className="block w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center">
            <span className="text-white text-xs font-semibold">f</span>
          </a>
          <a href="#" className="block w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center">
            <span className="text-white text-xs">@</span>
          </a>
          <a href="#" className="block w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center">
            <span className="text-white text-xs">✕</span>
          </a>
          <a href="#" className="block w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center">
            <span className="text-white text-xs">✉</span>
          </a>
        </div>
      </div>

      {/* Text Side - Right side */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black relative">
        {/* Gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-red-950/20 to-transparent pointer-events-none z-0" />
        
        {/* Content Container */}
        <div className="w-full h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 py-24 pt-32 relative z-10">
          {/* Welcome Tag */}
          <div className="flex items-center gap-3 mb-6 opacity-80">
            <div className="h-px w-12 bg-amber-500"></div>
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold">Welcome</span>
            <div className="h-px w-12 bg-amber-500"></div>
          </div>

          {/* Main Headlines */}
          <div className="space-y-6 mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t('hero.title1')}<br />
              {t('hero.title2')}<br />
              {t('hero.title3')}
            </h1>
            <p className="text-lg text-gray-300 max-w-md leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 py-6 mb-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>#1 BBQ in Vancouver</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>Family Owned & Operated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>5 Locations</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/menu"
              className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-base font-semibold uppercase tracking-wide shadow-lg hover:scale-105"
            >
              {t('hero.cta')}
            </Link>
            <Link
              to="/reservations"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-base font-semibold uppercase tracking-wide hover:scale-105"
            >
              {t('navigation.reservations')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
