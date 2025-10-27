export interface MenuItem {
  id: string;
  img: string;
  name: string; // Restaurant name, not the item name
  dsc: string; // Actual item description/name
  price: number;
  rate: number;
  country: string;
}

export interface MenuCategory {
  [categoryName: string]: MenuItem[];
}

export interface MenuApiResponse {
  [categoryName: string]: MenuItem[] | {
    [categoryName: string]: number;
  };
}

