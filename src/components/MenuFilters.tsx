import { useTranslation } from 'react-i18next';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, isActive, onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 text-sm font-medium transition-colors ${
        isActive
          ? 'text-rose-950 border-b-2 border-rose-900 font-semibold'
          : 'text-gray-700 hover:text-rose-900 border-b-2 border-transparent'
      }`}
    >
      {label}
    </button>
  );
};

interface MenuFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const MenuFilters = ({ activeFilter, onFilterChange }: MenuFiltersProps) => {
  const { t } = useTranslation();
  
  const filters = [
    { id: 'all', label: t('menu.filters.all') },
    { id: 'bbq', label: t('menu.filters.bbq') },
    { id: 'steaks', label: t('menu.filters.steaks') },
    { id: 'sandwiches', label: t('menu.filters.sandwiches') },
    { id: 'sides', label: t('menu.filters.sides') },
    { id: 'drinks', label: t('menu.filters.drinks') },
    { id: 'desserts', label: t('menu.filters.desserts') },
  ];

  return (
    <div className="border-b border-gray-300 mb-10 bg-white/50 backdrop-blur-sm rounded-lg px-4 py-2">
      <div className="flex gap-2 overflow-x-auto">
        {filters.map((filter) => (
          <FilterButton
            key={filter.id}
            label={filter.label}
            isActive={activeFilter === filter.id}
            onClick={() => onFilterChange(filter.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuFilters;

