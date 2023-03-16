const CreateItem = () => {
    return (
        <div>
            <form enctype="multipart/form-data" name="itemForm" method="post" action="http://localhost:8000/items/create">
                <input name="name" placeholder="Item Name" type="text"></input>
                <input name="price" placeholder="Price" type="number" step="0.01"></input>
                <input name="image" placeholder="Select Image" type='file'></input>
                <input name="itemId" placeholder="id" type='number'></input>
                <button type="submit"></button>
            </form>
        </div>
    )
}

export default CreateItem;