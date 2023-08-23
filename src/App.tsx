import React, {Suspense, useCallback, useEffect, useState} from 'react';
import './appStyles.css'
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import {ITEMS_URL, LOADING_ITEMS} from "./appConstants";
import {filterItems} from "./appUtils";
import CategoryMenu from "./components/CategoryMenu/CategoryMenu";
import {Item} from "./appModels";
import {Route, Routes} from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import {useMemo} from 'react';
import NotificationPanel from "./components/Generic/NotificationPanel";
const ItemListView = React.lazy(() => import('./components/ItemView/ItemListView'));

const App = () => {
    const [query, setQuery] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [items, setItems] = useState<Item[]>([]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
        },
        []
    );

    const handleClick = useCallback(
        (id: number) => {
            setCategoryId(id);
        },
        []
    );

    useEffect(() => {
        axios.get(ITEMS_URL)
            .then(response => {
                // @ts-ignore
                setItems(Object.values(response.data)[0]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const filteredItems = useMemo(
        () => filterItems(items, query, categoryId),
        [items, query, categoryId]
    );
    return (
        <div className="App bg-gray">
            <Routes>
                <Route path="/"
                       element={<>
                           <SearchBar query={query} onChange={handleChange}/>
                           <CategoryMenu activeTab={categoryId} onMenuClick={handleClick}/>
                           <Suspense fallback={<NotificationPanel text={LOADING_ITEMS} />}>
                           <ItemListView itemList={filteredItems}/>
                           </Suspense>
                       </>}/>
                <Route path="/items/:id" element={<ItemDetail/>}/>
            </Routes>
        </div>
    );
}

export default App;
