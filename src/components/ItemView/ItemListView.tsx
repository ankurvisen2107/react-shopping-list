import React, {FC} from "react";
import {Item} from "../../appModels";
import ItemView from "./ItemView";
import NotificationPanel from "../Generic/NotificationPanel";
import {NO_DATA_FOUND} from "../../appConstants";

interface ItemListViewProps {
    itemList: Item[]
}

const ItemListView: FC<ItemListViewProps> = ({itemList}) => {
    return (
        <>
            {itemList.length === 0 && <NotificationPanel text={NO_DATA_FOUND}/>}
            <div className="item-list">
                {!!itemList && itemList.map((filteredItem: Item) => {
                    return (<ItemView item={filteredItem} isDetailView={false} key={filteredItem.id}/>);
                })}
            </div>
        </>
    );
}

export default ItemListView;