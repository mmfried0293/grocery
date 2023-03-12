// if link is needed
import { Link } from 'react-router-dom';

// needed so db info is not gathered on each iteration
import { useEffect } from 'react';

// returns an array of strings from object that's passed in
let productIds = Object.keys(cartData);
    // reduce function
    let totalUnitsInCart = productIds.reduce((prevVal, productId) => {
        return prevVal + cartData[productId].qty;
    }, 0);


// Link syntax, wrap your element with this
<Link to="/checkout"></Link>    

// input syntax, the setStateVariable must be called to define the element value
const Checkout = () => {
    //
    //userInfo = {firstName: "", lastName : ""}
    const [userInfo, setUserInfo] = useState({});
    return <form>
        <h1>Checkout Page</h1>
        <p>Hello, {userInfo.firstName} {userInfo.lastName}</p>
        <div>
            <input 
            name="firstName" 
            onChange={({target}) => setUserInfo({...userInfo, firstName : target.value})} 
            value={userInfo.firstName} 
            type="text" />
        </div>
        <div>
            <input 
            name="lastName" 
            onChange={({target}) => setUserInfo({...userInfo, lastName : target.value})} 
            type="text" />
        </div>
    </form>
}

export default whatever;