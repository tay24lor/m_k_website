import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
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
        
            <div className="hero-section">
                <h1 className="hero-title">Welcome to the Flower Resin Store</h1>
                <p className="hero-subtitle">
                Discover timeless beauty with our exquisite collection of flowers preserved in resin.
                </p>
                <Link to="/products" className="cta-button"> {/* Use Link for navigation */}
                Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Home;