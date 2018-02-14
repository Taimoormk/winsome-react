// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class LightBox extends Component {
  render() {
    console.log('this on lightbox', this);
    console.log('this.props on lightbox', this.props)
    return (
      <div id="lightbox" onClick={this.props.handleOpenLightBox}>
        <span className="close">&times;</span>
        <div className="lighbox-container">
          <div className="slides">
            <div className="slide-number">1 / 7</div>
            <img className="slide-image" src="./image/gallery-image-1.jpg" />
          </div>
          <a className="prev">&#10094;</a>
          <a className="next">&#10095;</a>
        </div>
      </div>
    );
  }
}