// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import '../css/styles.scss';
import App from './app';
import Board from './screens/Board';
import Heritage from './screens/Heritage';

ReactDOM.render(
  // <App />,
  // <Board />,
  <Heritage />,
  document.querySelector('#app')
)