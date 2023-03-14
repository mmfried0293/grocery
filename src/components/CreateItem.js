const CreateItem = () => {
    return (
        <div>
            <form name="itemForm" method="post" action="http://localhost:8000/items/create">
                <input name="name" placeholder="Item Name" type="text"></input>
                <input name="price" placeholder="Price" type="number"></input>
                <input name="image" placeholder="Select Image" ></input>
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default CreateItem;