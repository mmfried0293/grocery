import { useEffect } from "react";

const Order = (props)=>{

    async function fetchItems() {
        let res = await fetch('http://localhost:8000/items/json');
    
        let data = await res.json();
        props.setItemList(data);
    }
    
    useEffect(() => {
        fetchItems();
    }, []);


    return (<article>
            <h1>Place Your Order Here</h1>
            <form>

                <select>
                <option> Select Item</option>
                {props.itemList.map((item) =>{
                    return <option key={item.itemId} value= {item.itemId}> 
                                {item.name}
                    </option>
                    
                
                })}
                </select>
                    
                


            </form>
    </article>
   ) 
}


export default Order;