// src/components/SupportCenterPage.js
import React from 'react';
import Header from './Header';
import FAQs from './FAQs';
import ContactForm from './ContactForm';
import KnowledgeBase from './KnowledgeBase';
import './SupportCenterPage.css'; // Import CSS for styling

const SupportCenterPage = () => {
    return (
        <div className="support-center-page">
            <Header />
            <main className="main-content">
                <FAQs />
                <ContactForm />
                <KnowledgeBase />
            </main>
        </div>
    );
};

export default SupportCenterPage;
