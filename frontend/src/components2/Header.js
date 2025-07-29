// src/components/Header.js
import React from 'react';
import './Header.css'; // Import CSS for styling

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li><a href="#faqs">FAQs</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#knowledge-base">Knowledge Base</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
