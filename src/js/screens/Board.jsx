// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import Header from '../components/Header';
import BoardTitleHeader from '../components/Board/BoardTitleHeader';
import BoardIntro from '../components/Board/BoardIntro';
import BoardMembers1 from '../components/Board/BoardMembers1';
import BoardMembers2 from '../components/Board/BoardMembers2';
import Footer from '../components/Footer';
import FooterDescription from '../components/FooterDescription';

export default class Board extends Component {
  render() {
    return (
      <div>
        <Header />
        <BoardTitleHeader />
        <BoardIntro />
        <BoardMembers1 />
        <BoardMembers2 />
        <Footer />
        <FooterDescription />
      </div>
    );
  }
}