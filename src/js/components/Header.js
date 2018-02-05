// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class Header extends Component {
  render() {
    return(
      <section id="header">
        <div className="wrapper">
          <a className="logo" href="#">
            <img src="./image/geek_marketers_logo.png" alt="Logo" width={120}/>
          </a>
          <nav>
            <ul>
              <li>
                <div className="dropdown">
                  <a className="menu" href="#">Home</a>
                  <div className="drop-menu">
                      <a className="sub-menu" href="#">Link 1</a>
                      <a className="sub-menu" href="#">Link 2</a>
                      <a className="sub-menu" href="#">Link 3</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                    <a className="menu" href="#">Services</a>
                    <div className="drop-menu">
                        <a className="sub-menu" href="#">Link 1</a>
                        <a className="sub-menu" href="#">Link 2</a>
                        <a className="sub-menu" href="#">Link 3</a>
                    </div>
                  </div>
              </li>
              <li>
                <div className="dropdown">
                  <a className="menu" href="#">About</a>
                  <div className="drop-menu">
                      <a className="sub-menu" href="#">Link 1</a>
                      <a className="sub-menu" href="#">Link 2</a>
                      <a className="sub-menu" href="#">Link 3</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                    <a className="menu" href="#">Blogs</a>
                    <div className="drop-menu">
                        <a className="sub-menu" href="#">Link 1</a>
                        <a className="sub-menu" href="#">Link 2</a>
                        <a className="sub-menu" href="#">Link 3</a>
                    </div>
                  </div>
              </li>
              <li>
                <div className="dropdown">
                    <a className="menu" href="#">Contact</a>
                    <div className="drop-menu">
                        <a className="sub-menu" href="#">Link 1</a>
                        <a className="sub-menu" href="#">Link 2</a>
                        <a className="sub-menu" href="#">Link 3</a>
                    </div>
                  </div>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}