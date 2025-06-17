import React from 'react';
import '../styles/About.css'; // Ensure you create a corresponding CSS file for styling
import Menu from './Menu';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <Menu />
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to the Flower Resin Store! We specialize in preserving the beauty of nature by creating exquisite flower resin products. 
                Our mission is to bring timeless elegance into your life with handcrafted pieces that capture the essence of flowers.
            </p>
            <p className="about-description">
                Each product is carefully designed and crafted with love, ensuring that every detail reflects our passion for nature and art. 
                Whether you're looking for a unique gift or a beautiful addition to your home, we have something special for everyone.
            </p>
            <p className="about-description">
                Thank you for supporting our small business. We hope our creations bring joy and beauty into your life!
            </p>
        </div>
    );
};

export default About;