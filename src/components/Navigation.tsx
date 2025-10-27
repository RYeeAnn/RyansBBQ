import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/Logo.png';

const languages = [
  { code: 'en', name: 'English', native: 'EN' },
  { code: 'fr', name: 'Français', native: 'FR' },
  { code: 'zh', name: '简体中文', native: '中文' },
  { code: 'ko', name: '한국어', native: '한국' },
  { code: 'ja', name: '日本語', native: '日本語' },
  { code: 'es', name: 'Español', native: 'ES' },
];

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const langMenuRef = useRef<HTMLDivElement>(null);
  const currentLangCode = i18n.language;

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLangOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLangCode) || languages[0];

  // Determine text color based on page
  const textColor = isLandingPage ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700';
  const navBg = isLandingPage ? 'bg-transparent absolute' : 'bg-white fixed shadow-md';

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`${navBg} top-0 w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo - Hidden on mobile if on landing page, always visible on other pages */}
          <div className={`flex items-center ${isLandingPage ? 'md:hidden' : ''}`}>
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Ryan's BBQ" className="h-14 sm:h-16 md:h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation - Positioned on the right */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <Link to="/" className={`${textColor} transition-colors font-light text-xs uppercase tracking-wider ${location.pathname === '/' ? 'underline decoration-1 underline-offset-4' : ''}`}>
              {t('navigation.home')}
            </Link>
            <Link to="/menu" className={`${textColor} transition-colors font-light text-xs uppercase tracking-wider ${location.pathname === '/menu' ? 'underline decoration-1 underline-offset-4' : ''}`}>
              {t('navigation.menu')}
            </Link>
            <Link to="/locations" className={`${textColor} transition-colors font-light text-xs uppercase tracking-wider ${location.pathname === '/locations' ? 'underline decoration-1 underline-offset-4' : ''}`}>
              {t('navigation.locations')}
            </Link>
            <Link to="/contact" className={`${textColor} transition-colors font-light text-xs uppercase tracking-wider ${location.pathname === '/contact' ? 'underline decoration-1 underline-offset-4' : ''}`}>
              {t('navigation.contact')}
            </Link>
            <Link to="/reservations" className={`${textColor} transition-colors font-light text-xs uppercase tracking-wider ${location.pathname === '/reservations' ? 'underline decoration-1 underline-offset-4' : ''}`}>
              {t('navigation.reservations')}
            </Link>
            
            {/* Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`${textColor} transition-colors font-light text-xs uppercase tracking-wider flex items-center hover:opacity-75`}
              >
                {currentLang.native}
                <svg className={`ml-1 h-3 w-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 max-h-80 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between ${
                        currentLangCode === lang.code ? 'bg-gray-50 font-medium' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.native}</span>
                      <span className="text-xs text-gray-500">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none z-30"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden ${isLandingPage ? 'bg-black bg-opacity-95' : 'bg-white shadow-lg'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 ${textColor} uppercase text-sm tracking-wide`}
              onClick={() => setIsOpen(false)}
            >
              {t('navigation.home')}
            </Link>
            <Link
              to="/menu"
              className={`block px-3 py-2 ${textColor} uppercase text-sm tracking-wide`}
              onClick={() => setIsOpen(false)}
            >
              {t('navigation.menu')}
            </Link>
            <Link
              to="/locations"
              className={`block px-3 py-2 ${textColor} uppercase text-sm tracking-wide`}
              onClick={() => setIsOpen(false)}
            >
              {t('navigation.locations')}
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 ${textColor} uppercase text-sm tracking-wide`}
              onClick={() => setIsOpen(false)}
            >
              {t('navigation.contact')}
            </Link>
            <Link
              to="/reservations"
              className={`block px-3 py-2 ${textColor} uppercase text-sm tracking-wide`}
              onClick={() => setIsOpen(false)}
            >
              {t('navigation.reservations')}
            </Link>
            
            {/* Mobile Language Selector */}
            <div className="border-t border-gray-700 mt-2 pt-2">
              <div className="px-3 py-2 text-xs uppercase tracking-wide text-gray-400">
                Language
              </div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                  }}
                  className={`w-full text-left block px-3 py-2 uppercase text-sm tracking-wide flex items-center justify-between ${
                    currentLangCode === lang.code 
                      ? `${textColor} font-bold` 
                      : textColor
                  }`}
                >
                  <span>{lang.native}</span>
                  <span className="text-xs opacity-75">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

