// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class LifeAtCampus extends Component {
  render() {
    return (
      <section id="life-at-campus">
        <div className="wrapper">
          <h4>Life at Campus</h4>
          <div className="gallery-container">
            <div className="image-coloumn-1">
              <div className="image-container">
                <img src="./image/gallery-image-1.jpg" alt="gallery-image" width={410.75} />
                {/* <div className="overlay">
                  <div className="icon"><i className="fa fa-arrows-alt"></i></div>
                </div> */}
              </div>
              <div className="image-container">
                <img src="./image/gallery-image-3.jpg" alt="gallery-image" width={410.75} />
              </div>
            </div>
            <div className="image-coloumn-2">
              <div className="image-container">
                <img src="./image/gallery-image-2.jpg" alt="gallery-image" width={320} />
              </div>
              <div className="image-container">
                <img src="./image/gallery-image-5.jpg" alt="gallery-image" width={320} />
              </div>
              <div className="image-container">
                <img src="./image/gallery-image-7.jpg" alt="gallery-image" width={320} />
              </div>
            </div>
            <div className="image-coloumn-3">
              <div className="image-container">
                <img src="./image/gallery-image-6.jpg" alt="gallery-image" width={410.75} />
              </div>
              <div className="image-container">
                <img src="./image/gallery-image-4.jpg" alt="gallery-image" width={410.75} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}