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
import HomeMenu from './components/MenuItems/HomeMenu';
import ServicesMenu from './components/MenuItems/ServicesMenu';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      showHome: false,
      showServices: false,
      showAbout: false,
      showBlogs: false,
      showContact: false,
      openLightBox: false,
      closeLightBox: true,
      menuItems: [<HomeMenu />, <ServicesMenu />, 'About', 'Blogs', 'Contact'],
    }
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handlePullUp = this.handlePullUp.bind(this);
    this.handleOpenLightBox = this.handleOpenLightBox.bind(this);
    this.handleCloseLightBox = this.handleCloseLightBox.bind(this);
  }

  handleDropDown(e){
    console.log('dropdown');
    console.log('handleDropDown', e);
    // if (e.target === 'HomeMenu') {
    //   this.setState({
    //     showHome: true
    //   })
    // } else if (e.target.innerHTML === 'Services') {
    //   this.setState({
    //     showServices: true
    //   })
    // } else if (e.target.innerHTML === 'About') {
    //   this.setState({
    //     showAbout: true
    //   })
    // } else if (e.target.innerHTML === 'Blogs') {
    //   this.setState({
    //     showBlogs: true
    //   })
    // } else if (e.target.innerHTML === 'Contact') {
    //   this.setState({
    //     showContact: true
    //   })
    // }
    this.setState({
      showHome: true,
      showServices: true
    })
  }

  handlePullUp(e){
    console.log('pullup');
    console.log(e.target);
    this.setState({
      showHome: false,
      showServices: false,
      showAbout: false,
      showBlogs: false,
      showContact: false
    })
  }

  handleOpenLightBox(e) {
    console.log('openLightBox clicked');
    console.log(e.target);
    this.setState({
      openLightBox: true,
    })
  }

  handleCloseLightBox(e) {
    console.log('closeLightBox')
  }

  render() {
    console.log('this on app', this);
    console.log('this.props on app', this.props)
    return (
      <div>
        <Header
          menuItems={this.state.menuItems}
          showHome={this.state.showHome}
          showServices={this.state.showServices}
          showAbout={this.state.showAbout}
          showBlogs={this.state.showBlogs}
          showContact={this.state.showContact}
          handleDropDown={this.handleDropDown}
          handlePullUp={this.handlePullUp}
        />
        <HeroImage />
        <WhoWeAre />
        <WhatsBeenHappening />
        <LifeAtCampus 
          openLightBox={this.state.openLightBox}
          closeLightBox={this.state.closeLightBox}
          handleOpenLightBox={this.handleOpenLightBox}
          handleCloseLightBox={this.handleCloseLightBox}
        />
        <Footer />
        <FooterDescription />
      </div>
    );
  }
}