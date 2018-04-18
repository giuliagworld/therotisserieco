import React from 'react';
import PropTypes from 'prop-types';

Food.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

function Food(props) {
  return (
    <div className="col-xs-12 col-md-4 item">
      <div className="image-container">
        <img className="image" src={props.src} />
      </div>
      <div className="name-container">
        <h3 className="heading-3 name">{props.name}</h3>
      </div>
    </div>
  )
}

export default Food;