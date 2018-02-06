// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class DropDownMenu extends Component {
  render() {
    return(
      <div>
        <div className="drop-menu">
          <a className="sub-menu" href="#">Link 1</a>
          <a className="sub-menu" href="#">Link 2</a>
          <a className="sub-menu" href="#">Link 3</a>
        </div>
      </div>
    );
  }
}