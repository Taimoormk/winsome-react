// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class HeroImage extends Component {
  render() {
    return (
      <section id="hero-image">
        <div className="wrapper">
          <h2>Rigorous Minds</h2>
          <h3>Compassionate Hearts</h3>
          <div className="button-container">
            <button className="hero-button alpha"><i className="fa fa-facebook hero-button-icon"></i>Childcare<br /><span className="hero-button-learn">Learn More</span></button>
            <button className="hero-button alpha"><i className="fa fa-facebook hero-button-icon"></i>Kindy + Pre<br /><span className="hero-button-learn">Learn More</span></button>
            <button className="hero-button alpha"><i className="fa fa-facebook hero-button-icon"></i>Primary<br /><span className="hero-button-learn">Learn More</span></button>
            <button className="hero-button alpha"><i className="fa fa-facebook hero-button-icon"></i>Secondary<br /><span className="hero-button-learn">Learn More</span></button>
          </div>
        </div>
      </section>
    );
  }
}