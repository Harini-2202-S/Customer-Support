import React from "react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div class="support-app">
      <div class="support">
        <p class="support-para">
          Here you can find support for all our audio products.
        </p>
        <div class="claim-warranty-section1">
          <div class="overlay1">
            <h2>Register warranty</h2>
            <p>Click here to register your warranty </p>
            <button class="btn btn-primary">
              <Link to="/warranty-claim">REGISTER NOW</Link>
            </button>
          </div>
        </div>

        <div class="claim-warranty-section2">
          <div class="overlay2">
            <h2>Claim Warranty</h2>
            <p>Click here to claim your warranty </p>
            <button class="btn btn-primary">
              <Link to="/warranty-claim">DISCOVER HOW</Link>
            </button>
          </div>
        </div>

        <section class="contact-info">
          <h2>Contact Information</h2>
          <p>
            For any inquiries or assistance, feel free to reach out to our
            support team.
          </p>
          <ul>
            <li>Email: support@yourwebsite.com</li>
            <li>Phone: +91 11111 11111</li>
            <li>Chat: Available during business hours</li>
          </ul>
        </section>

        <section class="faqs">
          <h2>Frequently Asked Questions (FAQs)</h2>

          <section class="general-questions">
            <h3>General Questions</h3>
            <ul>
              <li>
                <strong>How can I create an account?</strong>
                <br />
                To create an account, click on the "Sign Up" link at the
                top-right corner of the website.
              </li>
              <li>
                <strong>What are your business hours?</strong>
                <br />
                Our business hours are Monday to Friday, 9:00 AM to 5:00 PM
                (EST).
              </li>
            </ul>
          </section>

          <section class="orders-shipping">
            <h3>Orders & Shipping</h3>
            <ul>
              <li>
                <strong>Can I cancel or change my order?</strong>
                <br />
                Orders can be canceled or modified within 24 hours of placing
                the order. Please contact our support team for assistance.
              </li>
              <li>
                <strong>How long will it take to receive my order?</strong>
                <br />
                Shipping times vary based on your location. You can check
                estimated delivery times during checkout.
              </li>
            </ul>
          </section>

          <section class="product-support">
            <h3>Product Support</h3>
            <p>Explore our product support resources:</p>
            <ul>
              <li>
                User Manuals: Download user manuals and setup guides for our
                products.
              </li>
              <li>
                Troubleshooting Tips: Find solutions to common issues and
                troubleshooting guides.
              </li>
              <li>
                Video Tutorials: Watch video tutorials to learn how to use our
                products effectively.
              </li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Support;
