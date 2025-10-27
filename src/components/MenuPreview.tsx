import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMenuData, getMenuItemsByCategory, getLimitedItems } from '../utils/fetchMenu';
import type { MenuItem } from '../types/menu';

const MenuPreview = () => {
  const [popularItems, setPopularItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const data = await fetchMenuData();
        // Get BBQ items for the preview
        const bbqItems = getMenuItemsByCategory(data, 'bbqs');
        // Get a limited selection (4 items)
        const limitedItems = getLimitedItems(bbqItems, 4);
        setPopularItems(limitedItems);
      } catch (error) {
        console.error('Failed to load menu preview:', error);
        // Fallback items if API fails
        setPopularItems([
          {
            id: 'fallback-1',
            img: 'https://images.unsplash.com/photo-1544025162-d7660e976e40?w=800',
            name: "Ryan's BBQ",
            dsc: 'Signature Smoked Beef Brisket',
            price: 24.99,
            rate: 5,
            country: 'Vancouver, BC'
          },
          {
            id: 'fallback-2',
            img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800',
            name: "Ryan's BBQ",
            dsc: 'Premium Pork Ribs',
            price: 28.99,
            rate: 5,
            country: 'Vancouver, BC'
          },
          {
            id: 'fallback-3',
            img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800',
            name: "Ryan's BBQ",
            dsc: 'Grilled BBQ Chicken',
            price: 22.99,
            rate: 4,
            country: 'Vancouver, BC'
          },
          {
            id: 'fallback-4',
            img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800',
            name: "Ryan's BBQ",
            dsc: 'Smoked Sausage Platter',
            price: 26.99,
            rate: 4,
            country: 'Vancouver, BC'
          }
        ]);
      }
    };

    loadMenuItems();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Menu Items
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with passion and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.dsc}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback image if API image fails to load
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1544025162-d7660e976e40?w=800';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.dsc}
                </h3>
                <p className="text-2xl font-bold text-amber-600 mb-2">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center text-gray-400">
                  <span className="text-sm">Rating: {item.rate}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
