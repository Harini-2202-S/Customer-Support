// src/components/KnowledgeBase.js
import React from 'react';
import './KnowledgeBase.css'; // Import CSS for styling

const KnowledgeBase = () => {
    return (
        <section id="knowledge-base" className="knowledge-base">
            <h2>Knowledge Base</h2>
            <input type="text" placeholder="Search..." className="search-input" />
            <ul className="article-list">
                <li>
                    <h3>How to setup your device?</h3>
                    <p>To set up your device, follow these steps:
                        <ol>
                            <li>Unbox your device and ensure all components are present.</li>
                            <li>Read the setup guide included with your device for specific instructions.</li>
                            <li>Charge your device if necessary.</li>
                            <li>Follow the on-screen prompts or instructions provided to complete the setup process.</li>
                        </ol>
                    </p>
                </li>
                <li>
                    <h3>Troubleshooting common issues</h3>
                    <p>If you encounter issues with your device, try these troubleshooting steps:
                        <ol>
                            <li>Restart your device.</li>
                            <li>Check for software updates.</li>
                            <li>Ensure your device is charged or connected to power.</li>
                            <li>Refer to the FAQs section or contact support for further assistance.</li>
                        </ol>
                    </p>
                </li>
                <li>
                    <h3>Product specifications</h3>
                    <p>For detailed product specifications, refer to the product page on our website or consult the product manual.</p>
                </li>
                {/* Add more articles as needed */}
            </ul>
        </section>
    );
};

export default KnowledgeBase;
