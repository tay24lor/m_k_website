import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Menu from './Menu';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home: React.FC = () => {
    useScrollReveal();

    const showcasePieces = [
        {
            id: 1,
            name: 'Bridal Bouquet Block',
            description: 'A wedding bouquet turned into a lasting keepsake so each anniversary still feels close.',
            image: '/src/images/roses_in_resin.jpg',
        },
        {
            id: 2,
            name: 'Lavender Frame Casting',
            description: 'A calm floral memory piece that keeps a meaningful day present in your home.',
            image: '/src/images/meg1.jpeg',
        },
        {
            id: 3,
            name: 'Wildflower Keepsake Set',
            description: 'A shared story preserved across smaller pieces for family gifting and remembrance.',
            image: '/src/images/wildflowers.jpg',
        },
        {
            id: 4,
            name: 'Pearl Bloom Display',
            description: 'A soft display designed for the flowers you never want to say goodbye to.',
            image: '/src/images/white_bloom.jpg',
        },
    ];

    const processSteps = [
        'Send a note with flower photos and the memory they represent.',
        'Receive a thoughtful recommendation on shape, size, and composition.',
        'Approve your custom concept before preservation begins.',
        'Your finished keepsake is sealed, polished, and ready to cherish.',
    ];

    return (
        <div className="home-page">
            <Menu />

            <section className="home-hero reveal-on-scroll">
                <p className="hero-kicker">Handcrafted Resin Preservation</p>
                <h1 className="hero-title">Turn your flowers into a keepsake you can hold for years.</h1>
                <p className="hero-subtitle">
                    Some flowers mark the most important moments of our lives. We preserve them by hand so your memory stays visible,
                    not tucked away.
                </p>
                <div className="hero-actions">
                    <Link to="/contact" className="cta-button primary">Request Your Piece</Link>
                    <Link to="/products" className="cta-button secondary">View Size + Shape Options</Link>
                </div>
            </section>

            <section className="showcase-section reveal-on-scroll">
                <h2 className="section-title">Selected Past Work</h2>
                <div className="showcase-grid">
                    {showcasePieces.map((piece, index) => (
                        <article
                            key={piece.id}
                            className="showcase-card reveal-on-scroll"
                            style={{ '--reveal-delay': `${index * 120}ms` } as React.CSSProperties}
                        >
                            <div className="showcase-image-wrap">
                                <img src={piece.image} alt={piece.name} className="showcase-image" />
                            </div>
                            <div className="showcase-content">
                                <h3>{piece.name}</h3>
                                <p>{piece.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="parallax-band reveal-on-scroll">
                <div className="parallax-overlay reveal-on-scroll" style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
                    <p>Designed to protect color, shape, and the feeling behind the moment.</p>
                </div>
            </section>

            <section className="process-section reveal-on-scroll">
                <h2 className="section-title">How Custom Orders Work</h2>
                <div className="process-grid">
                    {processSteps.map((step, index) => (
                        <article
                            key={step}
                            className="process-card reveal-on-scroll"
                            style={{ '--reveal-delay': `${index * 100}ms` } as React.CSSProperties}
                        >
                            <span className="process-index">0{index + 1}</span>
                            <p>{step}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="home-inquiry-cta reveal-on-scroll">
                <h2>Ready to preserve what matters most?</h2>
                <p>Share your flower type, timeline, and the story you want to keep close.</p>
                <Link to="/contact" className="cta-button primary">Send a Custom Request</Link>
            </section>
        </div>
    );
};

export default Home;