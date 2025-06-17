import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            emailjs
                .sendForm(
                    'service_fifgyz8', // Replace with your EmailJS service ID
                    'template_a8u8b2a', // Replace with your EmailJS template ID
                    formRef.current,
                    'em5oR6gmPHH-D2r03' // Replace with your EmailJS user ID (or public key)
                )
                .then(
                    (result) => {
                        console.log('Email sent successfully:', result.text);
                        alert('Message sent successfully!');
                        formRef.current?.reset(); // Reset the form after submission
                    },
                    (error) => {
                        console.error('Error sending email:', error.text);
                        alert('Failed to send message. Please try again.');
                    }
                );
        }
    };

    return (
        <div className="page-container">
            <div className="header-nav">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About Us</Link></ li>
                    </ul>
                </nav>
            </div>
            <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
                <h2>Contact Us</h2>
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
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;