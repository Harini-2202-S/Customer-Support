// src/components/FAQs.js
import React from 'react';
import './FAQs.css'; // Import CSS for styling

const FAQs = () => {
    return (
        <section id="faqs" className="faqs">
            <h2>FAQs</h2>
            <ul>
                <li>
                    <h3>How do I pair my device with Bluetooth?</h3>
                    <p>To pair your device with Bluetooth, follow these steps:
                        <ol>
                            <li>Turn on your device and ensure Bluetooth is enabled.</li>
                            <li>Go to the Bluetooth settings on your device.</li>
                            <li>Select the name of your Bluetooth device (e.g., Boat Airdopes 441).</li>
                            <li>Follow any on-screen prompts to complete the pairing process.</li>
                        </ol>
                    </p>
                </li>
                <li>
                    <h3>What is the warranty period?</h3>
                    <p>The warranty period varies by product. Please refer to the product documentation or visit our website for specific warranty information.</p>
                </li>
                <li>
                    <h3>How do I reset my device?</h3>
                    <p>To reset your device, please follow these general steps:
                        <ol>
                            <li>Locate the reset button or reset option in the device settings.</li>
                            <li>Press and hold the reset button or follow the on-screen instructions to initiate the reset process.</li>
                            <li>Wait for the device to restart and reset to its factory settings.</li>
                        </ol>
                    </p>
                </li>
                {/* Add more questions and answers as needed */}
            </ul>
        </section>
    );
};

export default FAQs;
