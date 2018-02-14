// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class BoardIntro extends Component {
  render() {
    return (
      <div id="board-intro">
        <div className="wrapper">
          <div className="intro-left">
            <h3 className="intro-heading">The College is an Incorporated not-for-profit Association governed by the College Board, which is responsible to the Minister for Education for the educational achievements of its students.</h3>
          </div>
          <div className="intro-right">
            <h3 className="intro-heading">The Board's key responsibilities include;</h3>
            <ul>
              <li>
                Strategic Planning
            </li>
              <li>
                Finance
            </li>
              <li>
                Legal Policy
            </li>
              <li>
                Appointing the Principal
            </li>
              <li>
                Convening of Sub-Task Teams
            </li>
            </ul>
            <p>Members of the Board are appointed by the Eldership of Rockingham Baptist Church.</p>
          </div>
        </div>
      </div>
    );
  }
}