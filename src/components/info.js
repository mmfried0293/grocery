// if link is needed
import { Link } from 'react-router-dom';

// returns an array of strings from object that's passed in
let productIds = Object.keys(cartData);
    let totalUnitsInCart = productIds.reduce((prevVal, productId) => {
        return prevVal + cartData[productId].qty;
    }, 0);