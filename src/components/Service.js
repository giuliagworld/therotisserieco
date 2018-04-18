import React from 'react';
import PropTypes from 'prop-types';

Service.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

function Service(props) {
  return (
    <div className="col-xs-12 col-lg-4 item-container">
      <div className="item">
        <div className="image-container">
          <img className="image" src={props.src} />
        </div>
        <div className="info-container">
          <h3 className="heading-3 name">{props.name}</h3>
          <p className="body-1 description">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Service;