// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import Header from '../components/Header';
import HeritageTitleHeader from '../components/Heritage/HeritageTitleHeader';
import HeritageIntro from '../components/Heritage/HeritageIntro';
import Footer from '../components/Footer';
import FooterDescription from '../components/FooterDescription';

export default class Heritage extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeritageTitleHeader />
        <HeritageIntro />
        <Footer />
        <FooterDescription />
      </div>
    );
  }
}