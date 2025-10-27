import type { MenuApiResponse, MenuItem } from '../types/menu';

const API_URL = 'https://free-food-menus-api-two.vercel.app/all';
const CACHE_KEY = 'menu_data_cache';
const CACHE_TIMESTAMP_KEY = 'menu_data_timestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes 

const getCachedMenuData = (): MenuApiResponse | null => {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

    if (!cachedData || !cachedTimestamp) {
      return null;
    }

    const now = Date.now();
    const timestamp = parseInt(cachedTimestamp, 10);

    // Check if cache is still valid (not expired)
    if (now - timestamp < CACHE_DURATION) {
      return JSON.parse(cachedData) as MenuApiResponse;
    }

    // Cache expired, remove it
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    return null;
  } catch (error) {
    console.error('Error reading menu cache:', error);
    return null;
  }
};

const setCachedMenuData = (data: MenuApiResponse): void => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
  } catch (error) {
    console.error('Error caching menu data:', error);
  }
};

export const fetchMenuData = async (): Promise<MenuApiResponse> => {
  // Check cache first
  const cachedData = getCachedMenuData();
  if (cachedData) {
    return cachedData;
  }

  // No valid cache, fetch from API
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch menu data');
  }
  
  const data = await response.json();
  
  // Store in cache
  setCachedMenuData(data);
  
  return data;
};

export const getMenuItemsByCategory = (
  data: MenuApiResponse,
  category: string
): MenuItem[] => {
  const categoryData = data[category];
  return Array.isArray(categoryData) ? categoryData : [];
};

// Get a subset of items for display (avoid showing all 40-60 items)
export const getLimitedItems = (items: MenuItem[], limit: number = 8): MenuItem[] => {
  return items.slice(0, limit);
};

