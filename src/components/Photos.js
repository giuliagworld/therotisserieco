import React from 'react';
import Gallery from 'react-grid-gallery';
import GALLERY from '../data/Gallery';

function Photos(props) {
  return (
    <section className="photos">
      <div className="container-fluid">
        {/* <div className="container"> */}
          <Gallery images={GALLERY} enableImageSelection={false} enableLightbox={false} />
        {/* </div> */}
      </div>
    </section>
  )
}

export default Photos;