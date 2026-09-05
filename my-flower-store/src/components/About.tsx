import React from 'react';
import '../styles/About.css';
import Menu from './Menu';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
    useScrollReveal();

    return (
        <div className="about-container">
            <Menu />

            <section className="about-panel reveal-on-scroll">
                <p className="about-kicker">Our Studio</p>
                <h1 className="about-title">We preserve flowers so important moments can stay in view.</h1>
                <p className="about-description">
                    M|K Resin Studio is for people who cannot bear to watch meaningful flowers fade away. Each piece
                    is designed around your bouquet structure, preserving volume, texture, and movement through layered resin casting.
                </p>
                <p className="about-description">
                    We work one-on-one to match the right shape, scale, and layout to the emotion behind your arrangement,
                    whether it came from a wedding day, a remembrance, an anniversary, or another once-in-a-lifetime moment.
                </p>
                <p className="about-description">
                    Every order is custom and hand-finished. The result is a lasting keepsake made from your real flowers,
                    ready to be seen, shared, and remembered for years.
                </p>
            </section>
        </div>
    );
};

export default About;