import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FloatingInquiryButton.css';

const FloatingInquiryButton: React.FC = () => {
    return (
        <Link to="/contact" className="floating-inquiry-button" aria-label="Request a custom resin quote">
            Request Quote
        </Link>
    );
};

export default FloatingInquiryButton;
