import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';
import Nav from 'react-burger-menu/lib/menus/slide';

import Header from './Header';
import Food from './Food';
import Story from './Story';
import Service from './Service';
import Photos from './Photos';
import Footer from './Footer';

import { SocialIcon } from 'react-social-icons';


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
    })).isRequired,
  },
  showSettings(event) {
    event.preventDefault();
  },
  getInitialState: function () {
    return {
      menuOpen: false,
      menu: this.props.initialFood,
      services: this.props.initialServices
    }
  },
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  },
  // close menu when clicking on any link in the menu
  closeMenu() {
    this.setState({ menuOpen: false })
  },
  render: function() {
    return (
      <div>
        <div className="nav-container">
          <Nav right isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
            <a className="menu-item" href="#home" onClick={() => this.closeMenu()}>Home</a>
            <a className="menu-item" href="#food" onClick={() => this.closeMenu()}>Food</a>
            <a className="menu-item" href="#story" onClick={() => this.closeMenu()}>Story</a>
            <a className="menu-item" href="#services" onClick={() => this.closeMenu()}>Services</a>
            <a className="menu-item" href="#photos" onClick={() => this.closeMenu()}>Photos</a>
            <SocialIcon className="menu-item social" url="https://www.facebook.com/" color="white" />
            <SocialIcon className="menu-item social" url="https://www.twitter.com/" color="white" />
            <SocialIcon className="menu-item social" url="https://www.instagram.com/" color="white" />
            <a className="menu-item contact email" role="button" href="mailto:kim@therotisserieco.com">kim@therotisserieco.com</a><br />
            <a className="menu-item contact phone" role="button" href="tel:+441234567890">01234567890</a><br />
          </Nav>
        </div>
        <Header />
        <section id="food" className="food">
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
        <section id="services" className="services">
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
        <Footer />
      </div>
    )
  }
})

export default App;
