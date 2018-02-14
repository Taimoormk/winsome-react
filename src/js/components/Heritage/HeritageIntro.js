// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class HeritageIntro extends Component {
  render() {
    return (
      <div id="heritage-intro">
        <div className="wrapper">
          <h3 className="heritage-heading">Firms Foundation</h3>
          <div className="intro-left">
            <h4 className="intro-heading">The College held its first academic year in 1985, under the original name of Maranatha Christian College.</h4>
            <p>The ambitious initiative got off the ground through the leadership and support of Rockingham Baptist Church. The original vision was to provide Christ-centered education to families in the Rockingham region, and this still forms the foundation of our vision today.</p>
            <p>SCBC is aligned with the Baptist denomination, which believes in one true God: The Father, the Son, and the Holy Spirit. The teachings of the Scriptures of the Old and New Testaments form the doctrinal base. Families do not need to have a Christian faith to attend the College, but must be supportive of the Christian ethos of the school.</p>
          </div>
          <div className="intro-right">
            <p>In 2012, the College was rebranded to reflect the growth of the college, and its current name launched. Steady growth has meant the College has become better resourced and positioned to invest heavily in state-of-the-art technology, facilities and programs, such as the $45 million redevelopment (rolled out over 15 years) underway now. The highly successful Football Program is just one example of the more recent direction the College has taken, as it has become the first-choice of its kind.</p>
            <p>Graduates are encouraged to stay connected to the College and the friends they have made while studying here. We are now at an exciting stage where we are seeing our graduates send their own children through the school, trusting us to provide the same positive school experience they fondly remember.</p>
          </div>
        </div>
      </div>
    );
  }
}