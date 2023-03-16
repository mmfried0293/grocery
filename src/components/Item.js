const Item = (props) => {
    return (<div>
        <li>
        <img
            alt={props.name}
            src={'http://localhost:8000/grocery-server/assets/' + props.image}
        />
        <div><h3>{props.name}</h3></div>
        <div><p>{props.price}</p></div>
        </li>
</div>
        
    )
} 

export default Item;