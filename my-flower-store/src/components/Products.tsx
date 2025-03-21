import React from 'react';
import ProductList from './ProductList';

const Products: React.FC = () => {
  return (
    <div>
      <h2>Our Products</h2>
      <p>Check out our amazing products below.</p>
      <ProductList />
    </div>
  );
};

export default Products;