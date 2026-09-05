import React from 'react';
import '../styles/Products.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Products: React.FC = () => {
    useScrollReveal();

    const sizeOptions = [
        {
            name: 'Petite',
            dimensions: '4 in x 4 in',
            details: 'Ideal for a single bloom from a moment you want close every day.',
        },
        {
            name: 'Classic',
            dimensions: '6 in x 6 in',
            details: 'A balanced option for preserving the heart of your bouquet.',
        },
        {
            name: 'Statement',
            dimensions: '8 in x 8 in',
            details: 'Designed for fuller arrangements with movement, texture, and depth.',
        },
    ];

    const shapeOptions = [
        {
            name: 'Block',
            details: 'A timeless shape that highlights your flowers from every angle.',
        },
        {
            name: 'Arch',
            details: 'A signature silhouette with soft curves and gentle presence.',
        },
        {
            name: 'Hexagon',
            details: 'A modern geometry that frames petals with elegant symmetry.',
        },
        {
            name: 'Coaster Set',
            details: 'A practical keepsake set made from smaller treasured fragments.',
        },
    ];

    return (
        <div className="options-page">
            <Menu />

            <section className="options-hero reveal-on-scroll">
                <p className="options-kicker">Custom Build Menu</p>
                <h1>Choose the keepsake shape your memory deserves.</h1>
                <p>
                    Use these options to share the style that feels most like your story.
                    Every piece is adjusted to your flowers, your colors, and your meaning.
                </p>
            </section>

            <section className="options-section reveal-on-scroll">
                <h2>Size Options</h2>
                <div className="options-grid sizes">
                    {sizeOptions.map((option, index) => (
                        <article
                            key={option.name}
                            className="option-card reveal-on-scroll"
                            style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
                        >
                            <h3>{option.name}</h3>
                            <p className="option-meta">{option.dimensions}</p>
                            <p>{option.details}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="options-section reveal-on-scroll">
                <h2>Shape Options</h2>
                <div className="options-grid shapes">
                    {shapeOptions.map((option, index) => (
                        <article
                            key={option.name}
                            className="option-card reveal-on-scroll"
                            style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
                        >
                            <h3>{option.name}</h3>
                            <p>{option.details}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="options-cta reveal-on-scroll">
                <h2>Not sure which one fits your memory?</h2>
                <p>Send flower photos and your event date, and we will help you choose with care.</p>
                <Link to="/contact" className="options-button">Request a Custom Quote</Link>
            </section>
        </div>
    );
};

export default Products;