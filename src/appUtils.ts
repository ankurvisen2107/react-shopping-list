import {Category, Item} from "./appModels";
import {ALL_CATEGORIES} from "./appConstants";

export function filterItems(items : Item[], query: string, categoryId: number) {
    const filterItems = items.filter(item =>
        item.name.toLowerCase().startsWith(query.toLowerCase())
    );
    if (categoryId>0){
        return filterItems.filter(filterItems => filterItems.category_id == categoryId);
    }
    return filterItems;
}

export function getAllCategories(categories: Category[]): Category[] {
        const allCategories = [...categories];
        allCategories.unshift(ALL_CATEGORIES);
        return allCategories;
}
