import React from 'react';
import ProductList from './ProductList';
import '../styles/Products.css';
import Menu from './Menu';

const Products: React.FC = () => {
    return (
        <div className="page-container">
            <Menu />
            <h2>Our Products</h2>
            <p>Check out our amazing products below.</p>
            <div className="product-container">
                <ProductList />
            </div>
            
        </div>
    );
};

export default Products;