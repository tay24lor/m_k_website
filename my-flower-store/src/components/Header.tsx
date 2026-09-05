import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <div className="brand-lockup">
                <p className="brand-mark">M|K</p>
                <p className="brand-tagline">Custom Resin Floral Preservation</p>
            </div>
        </header>
    );
};

export default Header;