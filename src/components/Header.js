import { Link } from 'react-router-dom';

const Header = () => {
    return ( <div>
    <h1>
    Your Grocery Manager
    </h1>
    <Link to='/create'>
        <h4>Add More Items</h4>
    </Link>
    </div>)
}

export default Header;