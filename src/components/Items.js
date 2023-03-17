import Item from './Item'
import { useEffect } from 'react';


const Items = (props)=> {
    async function fetchItems() {
        let res = await fetch('http://localhost:8000/items/json');
    
        let data = await res.json();
        props.setItemList(data);
    }
    
    useEffect(() => {
        fetchItems();
    }, []);

    return (<article>
        <div>
                <h2>Item List</h2>
                <ul>
                    {
                        props.itemList.map((item)=>{
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