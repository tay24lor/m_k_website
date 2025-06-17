import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
        {/* <img src="/src/images/pink-blue-floral-bouquet-with-watercolor.jpg" alt="pink-blue-floral-bouquet-with-watercolor" width={100} /> */}
            <div className='logo'>
                <p>M|K</p>
            </div>
        </header>
    );
};

export default Header;