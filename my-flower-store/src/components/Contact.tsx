import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import Menu from './Menu';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    useScrollReveal();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        if (formRef.current) {
            emailjs
                .sendForm(
                    'service_fifgyz8',
                    'template_a8u8b2a',
                    formRef.current,
                    'em5oR6gmPHH-D2r03'
                )
                .then(
                    (result) => {
                        console.log('Email sent successfully:', result.text);
                        alert('Message sent successfully!');
                        formRef.current?.reset();
                        setIsSending(false);
                    },
                    (error) => {
                        console.error('Error sending email:', error.text);
                        alert('Failed to send message. Please try again.');
                        setIsSending(false);
                    }
                );
        } else {
            setIsSending(false);
        }
    };

    return (
        <div className="contact-page">
            <Menu />

            <section className="contact-intro reveal-on-scroll">
                <p className="contact-kicker">Custom Inquiry</p>
                <h1>Tell us about the flowers you want to hold on to.</h1>
                <p>
                    Share the story behind your bouquet, your preferred size or shape, and your timeline.
                    We will reply with thoughtful options for your custom keepsake.
                </p>
            </section>

            <form className="contact-form reveal-on-scroll" ref={formRef} onSubmit={sendEmail}>
                <h2>Request Form</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="event-date">Event Date (if applicable)</label>
                    <input
                        type="text"
                        id="event-date"
                        name="event_date"
                        placeholder="MM/YYYY"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="piece-type">Preferred Piece Type</label>
                    <input
                        type="text"
                        id="piece-type"
                        name="piece_type"
                        placeholder="Arch, block, hexagon, coaster set..."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about the flowers, the moment they came from, and the style you imagine."
                        rows={5}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send Request'}
                </button>
            </form>
        </div>
    );
};

export default Contact;