import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div class="home">
      <div class="hero-section">
        <h1>Welcome to SonicGram</h1>
        <p>Experience the ultimate in audio technology.</p>
      </div>

      <section class="about-section">
        <div class="about-content">
          <h2>About SonicGram</h2>
          <p>
            SonicGram is dedicated to delivering high-quality audio products
            that enhance your listening experience. Our products are crafted
            with precision to bring you unparalleled sound clarity and comfort.
          </p>
        </div>
      </section>

      <section class="features-section">
        <h2>Why Choose SonicGram?</h2>
        <div class="features-list">
          <div class="feature">
            <h3>Exceptional Sound Quality</h3>
            <p>Enjoy crystal-clear sound with our advanced audio technology.</p>
          </div>
          <div class="feature">
            <h3>Comfort and Durability</h3>
            <p>
              Designed for long-term comfort and durability, ideal for everyday
              use.
            </p>
          </div>
          <div class="feature">
            <h3>Stylish Design</h3>
            <p>Elegant and modern designs that complement your lifestyle.</p>
          </div>
        </div>
      </section>

      <footer class="footer">
        <p>&copy; 2024 SonicGram. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
