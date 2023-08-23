import React from 'react';
import {FaRegHeart} from "react-icons/fa";
import {ItemChild} from "../../appModels";
import IconPanel from "../Generic/IconPanel";

const ItemViewChild = ({name, like_count, price} : ItemChild) => {
    return (<>
        <div className="align-left">{name}</div>
        <div className="item-details">
            <IconPanel
                icon={<FaRegHeart size={'1.5em'}/>}
                count={like_count}
            />
            <p className="item-price">¥{price}</p>
        </div>
        </>);
};

export default ItemViewChild;