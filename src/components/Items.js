import Item from './Item'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Items = ()=> {
    const [itemList, setItemList] = useState([]);
    async function fetchItems() {
        let res = await fetch('http://localhost:8000/items/json');

        let data = await res.json();
        setItemList(data);
    }

    useEffect(() => {
        fetchItems();
    }, []);
    return (<article>
        <div>
                <h2>Item List</h2>
                <ul>
                    {
                        itemList.map((item)=>{
                            return <Item
                            key={item.itemId}
                            {...item}
                            />;
                        })
                    }
                </ul>
    </div>
    </article>

    )
}

export default Items;