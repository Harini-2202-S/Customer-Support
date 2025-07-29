// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css'; // Ensure to adjust styles if needed

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form submission logic (e.g., send data to server or handle locally)
        // For demonstration, just set submitted state to true
        setSubmitted(true);
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact-us" className="contact">
            <h2>Contact Us</h2>
            {submitted ? (
                <p className="confirmation-message">Message received! We'll get back to you shortly.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}
        </section>
    );
};

export default ContactForm;
