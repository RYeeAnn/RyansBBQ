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
          
          {/* CTA Button */}
          <div className="pt-4">
            <Link
              to="/menu"
              className="inline-block bg-white text-gray-900 px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-base font-semibold uppercase tracking-wide shadow-lg"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
