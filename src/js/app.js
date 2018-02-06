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
      showMenu: false
    }
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handlePullUp = this.handlePullUp.bind(this);
  }

  handleDropDown(e){
    console.log('dropdown');
    this.setState({
      showMenu: true
    });
  }

  handlePullUp(e){
    console.log('pullup');
    this.setState({
      showMenu: false
    })
  }

  render() {
    console.log('this on app', this);
    console.log('this.props on app', this.props)
    return (
      <div>
        <Header
          showMenu={this.state.showMenu}
          handleDropDown={this.handleDropDown}
          handlePullUp={this.handlePullUp}
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