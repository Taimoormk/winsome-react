// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import HomeMenu from './MenuItems/HomeMenu';
import ServicesMenu from './MenuItems/ServicesMenu';
import HomeDropDownMenu from './MenuItems/DropDownMenuItems/HomeDropDownMenu';
import ServicesDropDownMenu from './MenuItems/DropDownMenuItems/ServicesDropDownMenu';
import AboutDropDownMenu from './MenuItems/DropDownMenuItems/AboutDropDownMenu';
import BlogsDropDownMenu from './MenuItems/DropDownMenuItems/BlogsDropDownMenu';
import ContactDropDownMenu from './MenuItems/DropDownMenuItems/ContactDropDownMenu';

export default class Header extends Component {
  render() {
    // var renderMenu = this.props.menuItems.map(function(v, i){
    //   return (
    //     <li key={i}>{v}</li>
    //   );
    // })
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
                <HomeMenu 
                  // menuItems={this.props.menuItems}
                  showHome={this.props.showHome}
                  handleDropDown={this.props.handleDropDown}
                  handlePullUp={this.props.handlePullUp}
                />
              </li>
              <li>
                <ServicesMenu 
                  menuItems={this.props.menuItems}
                  showServices={this.props.showServices}
                  handleDropDown={this.props.handleDropDown}
                  handlePullUp={this.props.handlePullUp}
                />
              </li>
              {/* <li>
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
              </li> */}
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}