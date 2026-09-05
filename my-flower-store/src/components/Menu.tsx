import { Link } from "react-router-dom"
import React from 'react';

const Menu: React.FC = () => {
    return (
        <div className="site-nav-wrap">
            <nav>
                <ul className="site-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Options</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;