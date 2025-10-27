import MenuItemComponent from './MenuItem';
import type { MenuItem } from '../types/menu';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  categoryImage?: string;
  onItemClick?: (item: MenuItem) => void;
}

const MenuSection = ({ title, items, categoryImage, onItemClick }: MenuSectionProps) => {
  return (
    <div className="mb-20">
      {/* Category Image */}
      {categoryImage && (
        <div className="mb-10 flex justify-start">
          <div className="relative h-64 max-w-4xl overflow-hidden rounded-lg bg-gray-100 shadow-xl border-2 border-rose-200">
            <img
              src={categoryImage}
              alt={title}
              className="h-full object-contain"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1544025162-d7660e976e40?w=1200';
              }}
            />
          </div>
        </div>
      )}

      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-rose-950 mb-10 tracking-tight">
        {title}
      </h2>

      {/* Two Column Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {items.map((item) => (
          <MenuItemComponent key={item.id} item={item} onItemClick={onItemClick} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
