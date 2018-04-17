import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';
import Nav from 'react-burger-menu/lib/menus/slide';

import Header from './Header';
import Food from './Food';
import SlideShow from './SlideShow';


const App = createReactClass({
  showSettings(event) {
    event.preventDefault();
  },
  render: function() {
    return (
      <div>
        <div className="nav-container">
          <Nav right>
            <a id="home" className="menu-item link-default" href="/">Home</a>
            <a id="food" className="menu-item link-default" href="/food">Food</a>
            <a id="services" className="menu-item link-default" href="/services">Services</a>
            <a id="gallery" className="menu-item link-default" href="/gallery">Gallery</a>
            <a id="contact" className="menu-item link-default" href="/contact">Contact</a>
          </Nav>
        </div>
        <Header />
        <Food />
        <SlideShow />
      </div>
    )
  }
})

export default App;
