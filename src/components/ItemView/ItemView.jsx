import React from 'react';
import {Link} from "react-router-dom";
import ItemViewChild from "./ItemViewChild";
import ItemDetailChild from "../ItemDetail/ItemDetailChild";
import SoldPanel from "../Generic/SoldPanel";

const ItemView = ({item, isDetailView}) => {
    return (<div className="item center-align">
        <Link to={`/items/${item.id}`} className="item-link">
            <SoldPanel is_sold_out={item.is_sold_out} />
            <img src={item.image} alt={item.name} className="item-image"/>
            {isDetailView ?
                <ItemDetailChild name={item.name} description={item.description} like_count={item.like_count}
                                 comment_count={item.comment_count} price={item.price}
                                 shipping_fee={item.shipping_fee}/> :
                <ItemViewChild name={item.name} like_count={item.like_count} price={item.price}/>}
        </Link>
    </div>);
};

export default ItemView;
