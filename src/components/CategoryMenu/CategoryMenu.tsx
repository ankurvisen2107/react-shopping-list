import React, {EventHandler, FC, useEffect, useState} from 'react';
import {CATEGORIES_URL} from "../../appConstants";
import axios from "axios";
import {Category} from "../../appModels";
import {getAllCategories} from "../../appUtils";

interface Props {
    activeTab: number,
    // @ts-ignore
    onMenuClick: EventHandler<number>
}

const CategoryMenu: FC<Props> = ({onMenuClick, activeTab}) => {
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        axios.get(CATEGORIES_URL)
            .then(response => {
                // @ts-ignore
                setCategories(Object.values(response.data)[0]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const finalCategories = getAllCategories(categories);
    return (
        <div className="tab-component">
            <div className="categories">
                {
                    !!finalCategories && finalCategories.map((category: Category) => {
                        return (
                            <div key={category.id}
                                 className={`tab ${activeTab === category.id ? 'active' : ''}`}
                                 onClick={() => onMenuClick(category.id)}
                            >{category.name}
                            </div>)
                    })
                }
            </div>
        </div>
    );
};

export default React.memo(CategoryMenu);
