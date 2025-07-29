import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section about-us">
          <h4>ABOUT US</h4>
          <p>
            At SonicGram, we're committed to transforming the audio experience.
            Join our community to stay informed about the latest advancements in
            audio technology. Visit our <a href="/about-us">About Us</a> page.
          </p>
        </div>
        <div class="footer-section company">
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div class="footer-section quick-links">
          <h4>CALENDAR</h4>
          <ul>
            <li>
              <a href="/events-calendar">Events</a>
            </li>
          </ul>
        </div>
        <div class="footer-section contact-us">
          <h4>CONTACT US</h4>
          <p>
            SonicGram Pvt. Ltd.<br></br>
            123 Harmony Avenue<br></br>
            IT Corridor, OMR<br></br>
            Chennai, Tamil Nadu 600119<br></br>
            India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
