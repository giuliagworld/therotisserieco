import React from 'react';

function Contact(props) {
  return (
    <section id="contact" className="contact">
      <div className="container-fluid">
        <div className="container">
          <h2 className="heading-2">Contact</h2>
          <div className="row">
            <div className="col-xs-12 col-md-6 contact-container">
              <a className="contact-details email" role="button" href="mailto:test@bla.com">test@bla.com</a><br />
              <a className="contact-details phone" role="button" href="tel:+441234567890">01234567890</a>
            </div>
            <div className="col-xs-12 col-md-6 social-container">
              <a className="social" href="https://www.facebook.com/"><img className="icon" src="./assets/facebook.svg" /></a>
              <a className="social" href="https://twitter.com/"><img className="icon" src="./assets/twitter.svg" /></a>
              <a className="social" href="https://www.instagram.com/"><img className="icon" src="./assets/instagram.svg" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;