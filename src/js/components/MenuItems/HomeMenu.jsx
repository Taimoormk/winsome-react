// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import HomeDropDownMenu from './DropDownMenuItems/HomeDropDownMenu';

export default class HomeMenu extends Component {
  render() {
    return (
      <div
        className="dropdown"
        onMouseEnter={this.props.handleDropDown}
        onMouseLeave={this.props.handlePullUp}
      >
        <div className="menu" href="#">Home</div>
        <div>
          {this.props.showHome && <HomeDropDownMenu />}
        </div>
      </div>
    );
  }
}