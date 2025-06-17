import React from 'react';
import { useCart } from '../context/useCart';
import Header from './Header';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
    const { cart } = useCart();

    return (
    <div>
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
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 && <p>Your cart is empty.</p>}
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                    {item.name} x {item.quantity} (${(item.price * item.quantity).toFixed(2)})
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
};

export default Cart;