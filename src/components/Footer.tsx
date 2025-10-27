import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/Logo.png';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gradient-to-b from-rose-950 via-rose-900 to-rose-950 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* About */}
          <div>
            <img src={logo} alt="Ryan's BBQ" className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto mb-6" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-500 transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-amber-500 transition-colors">
                  {t('navigation.menu')}
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-amber-500 transition-colors">
                  {t('navigation.locations')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>604-000-0000</li>
              <li>info@ryansbbq.com</li>
              <li>Vancouver, BC</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.hours')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.weekdays')}</li>
              <li>{t('footer.weekends')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
          <p>&copy; 2025 Ryan's BBQ. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

