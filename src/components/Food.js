import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

function Food(props) {
  return (
    <section className="food">
      <div className="container-fluid">
        <div className="container">
          <h1 className="heading-1">Our Food</h1>
        </div>
      </div>
    </section>
  )
}

export default Food;