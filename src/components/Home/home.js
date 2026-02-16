
import React from 'react';
import './home.css'; 

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <p className="quote">"Time is money"</p>
        <span className="greeting">Hi, I'm </span>
        <span className="greeting1">Gorle </span>
        <p className="name"> Harsha Vardhan Naidu.</p>
        <p className="title">"Crafting digital experiences with code and data. Specialized in full-stack development and building intelligent data-driven applications."</p>
      </div>
    </section>
  );
};

export default Home;