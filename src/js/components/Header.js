// ########## Import Dependencies Here ##########
import React, { Component } from 'react';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import DropDownMenu from './DropDownMenu';

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
                    { this.props.showMenu && <DropDownMenu /> }
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