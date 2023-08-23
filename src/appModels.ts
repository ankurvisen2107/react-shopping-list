export type Item = {
    id: number,
    name: string,
    description: string,
    like_count: Number,
    comment_count: number,
    price: number,
    is_sold_out: boolean,
    shipping_fee: string,
    image: string,
    category_id: number
};

export type Category = {
    id: number,
    name: string
}

export type ItemChild = {
    name:string,
    like_count: number,
    price: number
}

export type ItemChildDetail= {
    name: string,
    description: string,
    like_count: number,
    comment_count: number,
    price: number,
    shipping_fee: string,
}
