import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';
import Nav from 'react-burger-menu/lib/menus/slide';

import Header from './Header';
import Food from './Food';
import Story from './Story';
import Service from './Service';
import Photos from './Photos';
import Contact from './Contact';
import Footer from './Footer';

const App = createReactClass({
  propTypes: {
    initialFood: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })).isRequired,
    initialServices: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })).isRequired
  },
  showSettings(event) {
    event.preventDefault();
  },
  getInitialState: function () {
    return {
      menu: this.props.initialFood,
      services: this.props.initialServices
    }
  },
  render: function() {
    return (
      <div>
        <div className="nav-container">
          <Nav right>
            <a id="home" className="menu-item link-default" href="/">Home</a>
            <a id="food" className="menu-item link-default" href="/food">Food</a>
            <a id="services" className="menu-item link-default" href="/services">Services</a>
            <a id="photos" className="menu-item link-default" href="/photos">Photos</a>
            <a id="contact" className="menu-item link-default" href="/contact">Contact</a>
          </Nav>
        </div>
        <Header />
        <section className="food">
          <div className="container-fluid">
            <div className="container">
              <h2 className="heading-2">Our Food</h2>
                <div className="row box-small">
                  {this.state.menu.map(function (food, index) {
                    return (
                      <Food src={food.src} name={food.name} key={food.id} />
                    );
                  }.bind(this))}
              </div>
            </div>
          </div>
        </section>
        <Story />
        <section className="services">
          <div className="container-fluid">
            <div className="container">
              <h2 className="heading-2">Our Services</h2>
              <div className="row">
                {this.state.services.map(function (service, index) {
                  return (
                    <Service src={service.src} name={service.name} description={service.description} key={service.id} />
                  );
                }.bind(this))}
              </div>
            </div>
          </div>
        </section>
        <Photos />
        <Contact />
        <Footer />
      </div>
    )
  }
})

export default App;
