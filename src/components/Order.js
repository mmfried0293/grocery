import { useEffect, useState } from "react";

const Order = (props)=>{

    async function fetchItems() {
        let res = await fetch('http://localhost:8000/items/json');
    
        let data = await res.json();
        props.setItemList(data);
    }
    
    useEffect(() => {
        fetchItems();
    }, []);

    const [orderList, setOrderList] = useState([]);

    const getOrderList = () => {
        async function fetchOrders(){
            let res = await fetch('http://localhost:8000/order/json');

            let data = await res.json();
            setOrderList(data);

        }
    }


    return (<article>
            <h1>Place Your Order Here</h1>
            <form method="post" action="http://localhost:8000/order/create">

                
                
                

                 <table>
                    <thead>
                    <th>Item Name</th>
                    <th>Price </th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                    </thead>
                    <tbody>
                        <tr>
                        <td><select name="ItemId" value={props.itemId}>
                <option > Select Item</option>
                {props.itemList.map((item) =>{
                    return <option key={item.itemId} value= {item.itemId}> 
                                {item.name}
                    </option>
                    
                
                })}
                </select></td>
                        
                <td> </td>
                   <td><input name="quantity" placeholder="Enter Quantity" type="number"></input></td>
                   <td></td>
                   <td><button>Add</button></td></tr>
                    </tbody>
                   
                    </table>   

                    
                


            </form>
    </article>
   ) 
}


export default Order;