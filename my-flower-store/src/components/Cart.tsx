import React from 'react';
import { useCart } from '../context/useCart';
import Menu from './Menu';

const Cart: React.FC = () => {
    const { cart } = useCart();

    return (
        <div>
            <Menu />
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