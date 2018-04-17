import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <section className="header">
      <div className="container-fluid">
        <div className="container">
          <h1 className="heading-1">The Rotisserie Company</h1>
        </div>
      </div>
    </section>
  )
}

export default Header;