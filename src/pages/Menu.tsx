import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MenuSection from '../components/MenuSection';
import MenuFilters from '../components/MenuFilters';
import { fetchMenuData, getMenuItemsByCategory, getLimitedItems } from '../utils/fetchMenu';
import type { MenuApiResponse, MenuItem } from '../types/menu';

interface ImageModalProps {
  imageUrl: string;
  itemName: string;
  onClose: () => void;
}

const ImageModal = ({ imageUrl, itemName, onClose }: ImageModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-white rounded-lg shadow-2xl overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-black bg-opacity-60 text-white hover:bg-opacity-80 w-8 h-8 rounded-full flex items-center justify-center text-xl font-light transition-all"
        >
          ×
        </button>
        <div className="p-3 bg-white">
          <img
            src={imageUrl}
            alt={itemName}
            className="w-full h-auto rounded-lg max-h-96 object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1544025162-d7660e976e40?w=800';
            }}
          />
        </div>
        <div className="p-3 bg-white">
          <h3 className="text-sm font-semibold text-gray-900 text-center line-clamp-2">{itemName}</h3>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const { t } = useTranslation();
  const [menuData, setMenuData] = useState<MenuApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryImages, setCategoryImages] = useState<Record<string, string>>({});
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    const loadMenuData = async () => {
      try {
        setLoading(true);
        const data = await fetchMenuData();
        setMenuData(data);

        // Extract the first item's image from each category as the representative image
        const images: Record<string, string> = {};
        
        const bbqItems = getMenuItemsByCategory(data, 'bbqs');
        if (bbqItems.length > 0) images['bbq'] = bbqItems[0].img;
        
        const steakItems = getMenuItemsByCategory(data, 'steaks');
        if (steakItems.length > 0) images['steak'] = steakItems[0].img;
        
        const sandwichItems = getMenuItemsByCategory(data, 'sandwiches');
        if (sandwichItems.length > 0) images['sandwich'] = sandwichItems[0].img;
        
        // Use a different image for sides - try an image from another category as fallback
        const sidesItems = getMenuItemsByCategory(data, 'best-foods');
        if (sidesItems.length > 0 && sidesItems[0].img) {
          // If the first image doesn't work, try the second one
          images['sides'] = sidesItems.length > 1 ? sidesItems[1].img : sidesItems[0].img;
        } else {
          // If best-foods doesn't have images, use a BBQ item
          const bbqItems = getMenuItemsByCategory(data, 'bbqs');
          if (bbqItems.length > 1) images['sides'] = bbqItems[1].img;
        }
        
        // Add drinks and desserts for a complete BBQ menu
        const drinkItems = getMenuItemsByCategory(data, 'drinks');
        if (drinkItems.length > 0) images['drinks'] = drinkItems[0].img;
        
        const dessertItems = getMenuItemsByCategory(data, 'desserts');
        if (dessertItems.length > 0) images['desserts'] = dessertItems[0].img;

        setCategoryImages(images);
      } catch (err) {
        setError(err instanceof Error ? err.message : t('menu.error'));
      } finally {
        setLoading(false);
      }
    };

    loadMenuData();
  }, []);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-900 text-xl">{t('menu.loading')}</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center text-gray-900">
            <p className="text-red-600 text-xl mb-4">{t('menu.error')}: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full"
            >
              {t('menu.tryAgain')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!menuData) return null;

  // Select relevant categories for our BBQ restaurant
  const bbqItems = getLimitedItems(getMenuItemsByCategory(menuData, 'bbqs'), 12);
  const steakItems = getLimitedItems(getMenuItemsByCategory(menuData, 'steaks'), 8);
  const sandwichItems = getLimitedItems(getMenuItemsByCategory(menuData, 'sandwiches'), 8);
  const sidesItems = getLimitedItems(getMenuItemsByCategory(menuData, 'best-foods'), 8);
  const drinkItems = getLimitedItems(getMenuItemsByCategory(menuData, 'drinks'), 10);
  const dessertItems = getLimitedItems(getMenuItemsByCategory(menuData, 'desserts'), 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-amber-50/30 to-gray-50">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 pt-24 pb-8 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <h1 className="text-3xl md:text-4xl font-light text-white tracking-tight text-center mb-3">
            {t('menu.title')}
          </h1>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MenuFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      {/* Menu Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {(activeFilter === 'all' || activeFilter === 'bbq') && bbqItems.length > 0 && (
          <MenuSection
            title={t('menu.sections.bbq')}
            items={bbqItems}
            categoryImage={categoryImages['bbq']}
            onItemClick={handleItemClick}
          />
        )}
        
        {(activeFilter === 'all' || activeFilter === 'steaks') && steakItems.length > 0 && (
          <MenuSection
            title={t('menu.sections.steaks')}
            items={steakItems}
            categoryImage={categoryImages['steak']}
            onItemClick={handleItemClick}
          />
        )}
        
        {(activeFilter === 'all' || activeFilter === 'sandwiches') && sandwichItems.length > 0 && (
          <MenuSection
            title={t('menu.sections.sandwiches')}
            items={sandwichItems}
            categoryImage={categoryImages['sandwich']}
            onItemClick={handleItemClick}
          />
        )}
        
        {(activeFilter === 'all' || activeFilter === 'sides') && sidesItems.length > 0 && (
          <MenuSection
            title={t('menu.sections.sides')}
            items={sidesItems}
            categoryImage={categoryImages['sides']}
            onItemClick={handleItemClick}
          />
        )}
        
        {(activeFilter === 'all' || activeFilter === 'drinks') && drinkItems.length > 0 && (
          <MenuSection
            title={t('menu.sections.drinks')}
            items={drinkItems}
            categoryImage={categoryImages['drinks']}
            onItemClick={handleItemClick}
          />
        )}
        
        {(activeFilter === 'all' || activeFilter === 'desserts') && dessertItems.length > 0 && (
          <MenuSection
            title={t('menu.sections.desserts')}
            items={dessertItems}
            categoryImage={categoryImages['desserts']}
            onItemClick={handleItemClick}
          />
        )}
      </div>

      {/* Modal for showing item images */}
      {selectedItem && (
        <ImageModal
          imageUrl={selectedItem.img}
          itemName={selectedItem.dsc}
          onClose={() => setSelectedItem(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Menu;
