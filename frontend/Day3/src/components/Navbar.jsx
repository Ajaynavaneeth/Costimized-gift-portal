import { useState } from 'react';
import '../assets/Navbar.css';
import logo from '../assets/images/logo.jpg';
import cart from '../assets/images/cart1.jpg';
import wishlist from '../assets/images/wishlist.jpg';
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile1.jpg';

const Navbar = () => {
    const [menu, setMenu] = useState("anniversary");

    // Define the gradient colors
    const gradientColors = ["#ff7e5f", "#feb47b", "#ffbfa4", "#ffd6c9"];

    // Create the gradient background style
    const gradientStyle = {
        background: `linear-gradient(to bottom right, ${gradientColors.join(', ')})`
    };

    return (
        <div className='navbar' style={gradientStyle}>
            <ul className='nav-menu' style={{ marginLeft: "8%" }}>
                <li onClick={() => { setMenu("birthday") }}>
                    <Link style={{ textDecoration: 'none' }} to='/Birthday'>Birthday</Link>
                    {menu === "birthday" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("anniversary") }}>
                    <Link style={{ textDecoration: 'none' }} to='/Anniversary'>Anniversary</Link>
                    {menu === "anniversary" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("wedding") }}>
                    <Link style={{ textDecoration: 'none' }} to='/Wedding'>Wedding</Link>
                    {menu === "corporate" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("bestwishes") }}>
                    <Link style={{ textDecoration: 'none' }} to='/Bestwishes'>BestWishes</Link>
                    {menu === "occasions" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("personalised") }}>
                    <Link style={{ textDecoration: 'none' }} to='/Personalised'>Personalised</Link>
                    {menu === "personalised" ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <img src={wishlist} alt='' width='20px' className="icon" style={{ marginLeft: "30%" }} />
                <Link to='/profile'>
                    <img src={profile} alt='' width='20px' className="icon" />
                </Link>
                <img src={cart} alt='' width='20px' className="icon" />
             
            </div>
        </div>
    );
}

export default Navbar;
