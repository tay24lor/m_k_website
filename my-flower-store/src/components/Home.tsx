import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Home.css';
import Menu from './Menu';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            < Menu />
        
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