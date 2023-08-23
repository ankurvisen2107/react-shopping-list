import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from "axios";
import {ITEMS_URL} from "../../appConstants";
import ItemView from "../ItemView/ItemView";
import {FaAngleLeft} from "react-icons/fa";
import {Item} from "../../appModels";


const ItemDetail = () => {
    const {id} = useParams();
    const [item, setItem] = useState<Item>();
    useEffect(() => {
        axios.get(`${ITEMS_URL}/${id}`)
            .then(response => {
                // @ts-ignore
                setItem(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id])
    return (
        <div className="display-inline">
            {item && <>
                <div className='align-left' >
                    <Link to={'/'}><FaAngleLeft size={'2em'} /></Link>
                    <span className="item-header"><strong>{item?.name}</strong></span>
                <ItemView item={item} isDetailView={true}/>
                </div>
            </>}
        </div>
    );
};

export default ItemDetail;
