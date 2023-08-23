import React from 'react';
import {FaRegHeart, FaRegComment, FaRegFlag} from "react-icons/fa";
import {ItemChildDetail} from "../../appModels";
import IconPanel from "../Generic/IconPanel";

const ItemDetailChild = ({name, description, like_count, comment_count, price, shipping_fee} :ItemChildDetail) => {
    return (<>
            <h3 className='align-left'>{name}</h3>
            <div className='item-row'>
                <div className='item-column align-left'>
                    <IconPanel
                        icon={<FaRegHeart size={'2.0em'}/>}
                        count={like_count}
                    />
                </div>
                <div className='item-column align-left'>
                    <IconPanel
                        icon={<FaRegComment size={'2em'}/>}
                        count={comment_count}
                    />
                </div>
                <div className='item-column align-right'>

                    <IconPanel
                        icon={<FaRegFlag size={'2em'}/>}
                    />
                </div>
            </div>
            <div className='item-description margin-top margin-bottom align-left bg-gray'>{description}</div>
            <div className="item-row price-section">
                <div className='item-column align-left margin-left'>
                    <span className="large-font">¥{price}
                        <span className="small-font">{shipping_fee}</span></span>
                </div>
                <div className='item-column align-right margin-right'>
                    <button className='buy-button'>今すぐ購入</button>
                </div>
            </div>
        </>
    );
};

export default ItemDetailChild;