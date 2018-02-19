import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tabs from '../elements/tabs';

import '../style/contact-style.css';

class Contact extends Component {


  componentDidMount() {

  }

  render() {
    return(
      <div>
        <nav id="header" class="navbar navbar-default fixed-top">
          <a class="navbar-brand" href="#"><img src="https://cdn.shopify.com/s/files/1/0311/1793/files/h_logo_xlarge1_280x@2x.png" height="60px"/></a>
          <div width="100%" height="100%" >
            <Tabs />
          </div>
        </nav>

        <div id="contact-form" class="contact-form-container">
          <label>Name</label>
          <input></input>

          <label>Email</label>
          <input></input>

          <label>Message</label>
          <input></input>
        </div>

      </div>
    )
  }
}

export default Contact;
