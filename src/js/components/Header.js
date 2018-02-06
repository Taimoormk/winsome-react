// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import HomeDropDownMenu from './HomeDropDownMenu';
import ServicesDropDownMenu from './ServicesDropDownMenu';
import AboutDropDownMenu from './AboutDropDownMenu';
import BlogsDropDownMenu from './BlogsDropDownMenu';
import ContactDropDownMenu from './ContactDropDownMenu';

export default class Header extends Component {
  render() {
    console.log('this on header', this);
    console.log('this.props on header', this.props)
    return(
      <section id="header">
        <div className="wrapper">
          <a className="logo" href="#">
            <img src="./image/geek_marketers_logo.png" alt="Logo" width={120}/>
          </a>
          <nav>
            <ul>
              <li>
                <div
                  className="dropdown"
                  onMouseEnter={this.props.handleDropDown}
                  onMouseLeave={this.props.handlePullUp}
                >
                  <div className="menu" href="#">Home</div>
                  <div>
                    { this.props.showHome && <HomeDropDownMenu /> }
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="dropdown"
                  onMouseEnter={this.props.handleDropDown}
                  onMouseLeave={this.props.handlePullUp}
                >
                  <div className="menu" href="#">Services</div>
                  <div>
                    { this.props.showServices && <ServicesDropDownMenu /> }
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="dropdown"
                  onMouseEnter={this.props.handleDropDown}
                  onMouseLeave={this.props.handlePullUp}
                >
                  <div className="menu" href="#">About</div>
                  <div>
                    { this.props.showAbout && <AboutDropDownMenu /> }
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="dropdown"
                  onMouseEnter={this.props.handleDropDown}
                  onMouseLeave={this.props.handlePullUp}
                >
                  <div className="menu" href="#">Blogs</div>
                  <div>
                    { this.props.showBlogs && <BlogsDropDownMenu /> }
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="dropdown"
                  onMouseEnter={this.props.handleDropDown}
                  onMouseLeave={this.props.handlePullUp}
                >
                  <div className="menu" href="#">Contact</div>
                  <div>
                    { this.props.showContact && <ContactDropDownMenu /> }
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