// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class WhatsBeenHappening extends Component {
  render() {
    return (
      <section id="whats-been-happening">
        <div className="wrapper">
          <h3>What's been happening</h3>
          <h4 className="section-h4">What it's like to be a part of our school community</h4>
          <div className="left">
            <div className="blog-image-wrapper">
              <div className="blog-image-1"></div>
              <div className="blog-overlay-1"></div>
              <div className="blog-icon-1 fa fa-arrows-v"></div>
            </div>
            <div className="blog-container">
              <p className="blog-info">June 27, 2017 | By Admin | In Sports</p>
              <h4 className="blog-heading">Blog title goes here</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, odit labore. Saepe eos est quasi! Officiis laborum libero aperiam quasi accusamus animi amet aliquam dolores, tenetur nam, consequatur eius recusandae</p>
              <button>Read More</button>
            </div>
          </div>
          <div className="right">
            <div className="blog-image-wrapper">
                <div className="blog-image-2"></div>
                <div className="blog-overlay-2"></div>
                <div className="blog-icon-2 fa fa-arrows-v"></div>
            </div>
            <div className="blog-container">
              <p className="blog-info">June 27, 2017 | By Admin | In Sports</p>
              <h4 className="blog-heading">Blog title goes here</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, odit labore. Saepe eos est quasi! Officiis laborum libero aperiam quasi accusamus animi amet aliquam dolores, tenetur nam, consequatur eius recusandae</p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}