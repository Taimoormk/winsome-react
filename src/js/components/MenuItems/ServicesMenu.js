// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import ServicesDropDownMenu from './DropDownMenuItems/ServicesDropDownMenu';

export default class ServicesMenu extends Component {
  render() {
    return (
      <div
        className="dropdown"
        onMouseEnter={this.props.handleDropDown}
        onMouseLeave={this.props.handlePullUp}
      >
        <div className="menu" href="#">Services</div>
        <div>
          {this.props.showServices && <ServicesDropDownMenu />}
        </div>
      </div>
    );
  }
}