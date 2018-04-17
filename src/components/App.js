import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';
import Nav from 'react-burger-menu/lib/menus/slide';

import Header from './Header';

const App = createReactClass({
  showSettings(event) {
    event.preventDefault();
  },
  render: function() {
    return (
      <div>
        <div className="nav-container">
          <Nav right>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
          </Nav>
        </div>
        <Header />
      </div>
    )
  }
})

export default App;
