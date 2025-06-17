import React from 'react';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import '../styles/Products.css';

const Products: React.FC = () => {
    return (
        <div className="page-container">
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
            <h2>Our Products</h2>
            <p>Check out our amazing products below.</p>
            <div className="product-container">
                <ProductList />
            </div>
            
        </div>
    );
};

export default Products;