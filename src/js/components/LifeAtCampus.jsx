// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import LightBox from './LightBox';

export default class LifeAtCampus extends Component {
  render() {
    console.log('this on lifeatcampus', this);
    console.log('this.props on lifeatcampus', this.props)
    return (
      <section id="life-at-campus">
        <div className="wrapper">
          <h4>Life at Campus</h4>
          <div className="gallery-container">
            <div className="gallery-image-coloumn-1">
              <div className="gallery-image-wrapper-1">
              <LightBox
                  openLightBox={this.props.openLightBox}
                  closeLightBox={this.props.closeLightBox}
                  handleOpenLightBox={this.props.handleOpenLightBox}
                  handleCloseLightBox={this.props.handleCloseLightBox}
                />
                <div className="gallery-image-1"></div>
                <div className="gallery-overlay-1"></div>
                <div className="gallery-icon-1 fa fa-arrows-v"></div>

              </div>
              <div className="gallery-image-wrapper-3">
                <div className="gallery-image-3"></div>
                <div className="gallery-overlay-3"></div>
                <div className="gallery-icon-3 fa fa-arrows-v"></div>
              </div>
            </div>
            <div className="gallery-image-coloumn-2">
              <div className="gallery-image-wrapper-2">
                <div className="gallery-image-2"></div>
                <div className="gallery-overlay-2"></div>
                <div className="gallery-icon-2 fa fa-arrows-v"></div>
              </div>
              <div className="gallery-image-wrapper-5">
                <div className="gallery-image-5"></div>
                <div className="gallery-overlay-5"></div>
                <div className="gallery-icon-5 fa fa-arrows-v"></div>
              </div>
              <div className="gallery-image-wrapper-7">
                <div className="gallery-image-7"></div>
                <div className="gallery-overlay-7"></div>
                <div className="gallery-icon-7 fa fa-arrows-v"></div>
              </div>
            </div>
            <div className="gallery-image-coloumn-3">
              <div className="gallery-image-wrapper-6">
                <div className="gallery-image-6"></div>
                <div className="gallery-overlay-6"></div>
                <div className="gallery-icon-6 fa fa-arrows-v"></div>
              </div>
              <div className="gallery-image-wrapper-4">
                <div className="gallery-image-4"></div>
                <div className="gallery-overlay-4"></div>
                <div className="gallery-icon-4 fa fa-arrows-v"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}