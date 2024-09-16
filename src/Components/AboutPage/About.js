// src/components/AboutUs.js
import React from 'react';
import './About.css'; // You can add custom CSS styles here

const About = () => {
  return (
    <div className="about-us">
      <div className='fit'>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>About Us</h1>
            <p>Bringing you the freshest fruits, straight from nature to your home.</p>
          </div>
        </section>

        {/* Company Info */}
        <section className="company-info">
          <h2>Our Story</h2>
          <p>
            At FreshFruits, we believe in the power of nature to nourish and enrich lives.
            Starting from humble beginnings as a small family-run farm, we’ve grown into a
            trusted supplier of fresh and organic fruits to thousands of households.
          </p>
        </section>

        {/* Mission & Values */}
        <section className="mission-values">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>Our mission is to provide fresh, organic, and responsibly sourced fruits to people who care about their health and the planet.</p>
          </div>
          <div className="values">
            <h2>Our Values</h2>
            <ul>
              <li>Commitment to Sustainability</li>
              <li>Respect for Nature</li>
              <li>Health and Well-being</li>
              <li>Integrity and Trust</li>
            </ul>
          </div>
        </section>

        {/* Team Section */}
        <section className="our-team">
          <h2>About Our Team</h2>
          <p>
            At FreshFruits, our team is made up of dedicated individuals who are passionate about delivering fresh, organic fruits right to your doorstep. With a commitment to sustainability and quality, each member plays a vital role in ensuring the highest standards of freshness and customer satisfaction. From farm to table, we work together to promote healthy and eco-friendly living.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
