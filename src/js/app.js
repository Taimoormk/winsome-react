// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import WhoWeAre from './components/WhoWeAre';
import WhatsBeenHappening from './components/WhatsBeenHappening';
import LifeAtCampus from './components/LifeAtCampus';
import Footer from './components/Footer';
import FooterDescription from './components/FooterDescription';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      homeHover: false
    }
  }

  render() {
    return (
      <div>
        <Header
          homeHover = {this.state.homeHover}
        />
        <HeroImage />
        <WhoWeAre />
        <WhatsBeenHappening />
        <LifeAtCampus />
        <Footer />
        <FooterDescription />
      </div>
    );
  }
}