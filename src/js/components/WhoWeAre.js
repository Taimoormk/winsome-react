// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class WhoWeAre extends Component {
  render() {
    return (
      <section id="who-we-are">
        <div className="wrapper">
          <div className="who-we-are">
            <h4>Who We Are</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, accusamus nobis tenetur recusandae, ipsa aut suscipit odit voluptates perspiciatis possimus nemo aspernatur nihil alias error dolore mollitia amet ea autem.</p>
            <button>Learn More</button>
          </div>
          <div className="year-groups">
            <h4>Year Groups</h4>
            <p><a href="#">Childcare >></a></p>
            <p><a href="#">Kindy & Early Learning >></a></p>
            <p><a href="#">Primary >></a></p>
            <p><a href="#">Secondary >></a></p>
            <button>Learn More</button>
          </div>
          <div className="our-kids">
            <h4>Our Kids</h4>
            <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" width="300" height="168.75"></iframe>
          </div>
        </div>
      </section>
    );
  }
}