import React from 'react';
import '../styles/ProductList.css';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';

const products: Product[] = [
  {
    id: 1,
    name: 'Rose in Resin',
    description: 'A beautiful rose preserved in resin.',
    price: 29.99,
    image: '/src/images/roses_in_resin.jpg',
  },
  // Add more products here
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;