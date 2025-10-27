import type { MenuItem } from '../types/menu';

interface MenuItemProps {
  item: MenuItem;
  onItemClick?: (item: MenuItem) => void;
}

const MenuItemComponent = ({ item, onItemClick }: MenuItemProps) => {
  const handleClick = () => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <div
      className="cursor-pointer py-3 border-b border-gray-200 hover:border-rose-400 transition-colors group"
      onClick={handleClick}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-base font-medium text-gray-900 group-hover:text-rose-800 transition-colors">
            {item.dsc}
          </h3>
        </div>
        <div className="flex-shrink-0">
          <span className="text-base font-medium text-gray-900 group-hover:text-rose-800 transition-colors whitespace-nowrap">
            {Math.floor(item.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItemComponent;
