import type { MenuApiResponse, MenuItem } from '../types/menu';

const API_URL = 'https://free-food-menus-api-two.vercel.app/all';

export const fetchMenuData = async (): Promise<MenuApiResponse> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch menu data');
  }
  return response.json();
};

export const getMenuItemsByCategory = (
  data: MenuApiResponse,
  category: string
): MenuItem[] => {
  return data[category] || [];
};

// Get a subset of items for display (avoid showing all 40-60 items)
export const getLimitedItems = (items: MenuItem[], limit: number = 8): MenuItem[] => {
  return items.slice(0, limit);
};

