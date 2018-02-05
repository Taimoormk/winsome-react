// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class FooterDescripton extends Component {
  render() {
    return (
      <div id="copyright">
        <div className="wrapper">
          <div className="left">
            <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
            <a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
          </div>
          <div className="right">
            <p>site by <a href="http://geekmarketers.xyz">Geek Marketers</a> | Copyright © 2018 Winsome School. All Rights Reserved</p>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}