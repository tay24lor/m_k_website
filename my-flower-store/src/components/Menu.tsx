import { Link } from "react-router-dom"
import React from 'react';

const Menu: React.FC = () => {
    return (
        <div className="header-nav">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;