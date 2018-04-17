import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';
import Nav from 'react-burger-menu/lib/menus/slide';
import Gallery from 'react-grid-gallery';
import IMAGES from './PhotoSet';

function SlideShow(props) {
  return (
    <section className="slideshow">
      <div className="container-fluid">
        <div className="container">
          <Gallery images={IMAGES} enableImageSelection={false} enableLightbox={false} />
        </div>
      </div>
    </section>
  )
}

export default SlideShow;