import {Category} from "./appModels";

export const BASE_URL = 'http://localhost:8000';
export const ITEMS_URL = `${BASE_URL}/items`;
export const CATEGORIES_URL = `${BASE_URL}/categories`;

export const ALL_CATEGORIES_ID = 0;

export const NO_DATA_FOUND = 'No Data found..';

export const LOADING_ITEMS = 'Loading Items...'

export const ALL_CATEGORIES: Category = {
    id: ALL_CATEGORIES_ID,
    name: 'all (すべて)'
}