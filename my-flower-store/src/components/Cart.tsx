import React from 'react';
import { useCart } from '../context/useCart';
import '../styles/Cart.css';
import Menu from './Menu';

const Cart: React.FC = () => {
    const { cart } = useCart();

    return (
        <div>
            <Menu />
            <div>
                <h2>Shopping Cart</h2>
                {cart.length === 0 && <p>Your cart is empty.</p>}
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item-card">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    <h3>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</h3>
                </div>
                <div className="cart-total-cost">
                    <h3>Total Cost: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;