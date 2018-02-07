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
      showHome: false,
      showServices: false,
      showAbout: false,
      showBlogs: false,
      showContact: false
    }
    this.handleDropDown = this.handleDropDown.bind(this);
    this.handlePullUp = this.handlePullUp.bind(this);
  }

  handleDropDown(e){
    console.log('dropdown');
    console.log(e.target);
    if (e.target.innerHTML === 'Home') {
      this.setState({
        showHome: true
      })
    } else if (e.target.innerHTML === 'Services') {
      this.setState({
        showServices: true
      })
    } else if (e.target.innerHTML === 'About') {
      this.setState({
        showAbout: true
      })
    } else if (e.target.innerHTML === 'Blogs') {
      this.setState({
        showBlogs: true
      })
    } else if (e.target.innerHTML === 'Contact') {
      this.setState({
        showContact: true
      })
    }
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
    // if (e.target.innerHTML === 'Home') {
    //   this.setState({
    //     showHome: false
    //   })
    // } else if (e.target.innerHTML === 'Services') {
    //   this.setState({
    //     showServices: false
    //   })
    // } else if (e.target.innerHTML === 'About') {
    //   this.setState({
    //     showAbout: false
    //   })
    // } else if (e.target.innerHTML === 'Blogs') {
    //   this.setState({
    //     showBlogs: false
    //   })
    // } else if (e.target.innerHTML === 'Contact') {
    //   this.setState({
    //     showContact: false
    //   })
    // }
  }

  render() {
    console.log('this on app', this);
    console.log('this.props on app', this.props)
    return (
      <div>
        <Header
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
        <LifeAtCampus />
        <Footer />
        <FooterDescription />
      </div>
    );
  }
}