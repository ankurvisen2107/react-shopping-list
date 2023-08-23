import {Category, Item} from "../appModels";

export const mockItemList: Item[] = [
    {
        id: 1,
        name: 'testName',
        description: 'testDescription',
        like_count: 4,
        comment_count: 7,
        price: 345,
        is_sold_out: true,
        shipping_fee: 'shipping_fee_1',
        image: 'testImage',
        category_id: 11
    },
    {
        id: 2,
        name: 'testName2',
        description: 'testDescription2',
        like_count: 7,
        comment_count: 12,
        price: 834,
        is_sold_out: false,
        shipping_fee: 'shipping_fee_2',
        image: 'testImage2',
        category_id: 22
    },
    {
        id: 3,
        name: 'testName3',
        description: 'testDescription3',
        like_count: 0,
        comment_count: 34,
        price: 987,
        is_sold_out: true,
        shipping_fee: 'shipping_fee_3',
        image: 'testImage3',
        category_id: 33
    },
    {
        id: 4,
        name: 'testName',
        description: 'testDesciption',
        like_count: 111,
        comment_count: 89,
        price: 8874,
        is_sold_out: true,
        shipping_fee: 'shipping_fee_4',
        image: 'testImage4',
        category_id: 11
    },
    {
        id: 5,
        name: 'testName5',
        description: 'testDescription5',
        like_count: 23,
        comment_count: 0,
        price: 0,
        is_sold_out: false,
        shipping_fee: 'shipping_fee_5',
        image: 'testImage5',
        category_id: 33
    }
];

export const mockCategories: Category[] = [
    {
        id: 1,
        name: 'category_1'
    },
    {
        id: 2,
        name: 'category_2'
    },
    {
        id: 3,
        name: 'category_3'
    },
    {
        id: 4,
        name: 'category_4'
    }
];

export const mockItem = {...mockItemList[0]};
export const isSoldMockItem = {...mockItemList[3]};
export const isSAvailableMockItem = {...mockItemList[4]};
export const mockCategoryItem = {...mockItemList[4]};
export const mockSearchItem = {...mockItemList[1]};