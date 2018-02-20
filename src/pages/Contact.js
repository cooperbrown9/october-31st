import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tabs from '../elements/tabs';

import '../style/contact-style.css';
import '../style/home-style.css';
// import '../style/style-cheat.css';

class Contact extends Component {


  componentDidMount() {

  }

  oldJSX() {
    {/*<div>
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

    </div>*/}
  }

  render() {
    return(
      <div class="contact-form-container" >
        <nav id="header" class="navbar navbar-default fixed-top">
          <a class="navbar-brand" href="#"><img src="https://cdn.shopify.com/s/files/1/0311/1793/files/h_logo_xlarge1_280x@2x.png" height="60px"/></a>
          <div width="100%" height="100%" >
            <Tabs />
          </div>
        </nav>
        <div class="fields">
        </div>
      </div>
    )
  }

  _render() {
    return;
    return(
      <div id="content_wrapper">

        <div id="shopify-section-header" class="shopify-section header-section">
          <nav id="header" class="navbar navbar-default fixed-top">
            <a class="navbar-brand" href="#"><img src="https://cdn.shopify.com/s/files/1/0311/1793/files/h_logo_xlarge1_280x@2x.png" height="60px"/></a>
            <div width="100%" height="100%" >

            </div>
          </nav>



        <div class="container mobile_logo">
          <div class="logo">
            <a href="https://xlarge.com" title="X-Large Clothing">

                <img src="//cdn.shopify.com/s/files/1/0311/1793/files/h_logo_xlarge1_280x@2x.png?v=1517444057" alt="X-Large Clothing"/>

            </a>
          </div>
        </div>


      <div class="hidden">



      </div>

      </div>

            <div class="content container">


      <div id="shopify-section-contact-template" class="shopify-section contact-template-section"><div class="sixteen columns clearfix collection_nav">
        <h1 class="collection_title">
          CONTACT
        </h1>
      </div>

    <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" class="contact-form"><input type="hidden" name="form_type" value="contact"/><input type="hidden" name="utf8" value="✓"/>

        <div class="sixteen columns page">


        <div>CUSTOMER SERVICE:&nbsp;<a class="linkification-ext" title="Linkification: mailto:info@xlarge.com" href="mailto:info@xlarge.com">info@xlarge.com</a>
      </div>
      <div>PRESS: <a class="linkification-ext" title="Linkification: mailto:info@xlarge.com" href="mailto:info@xlarge.com">info@xlarge.com</a>
      </div>
      <div></div>

        </div>



        <div class="six columns offset-by-five">



          <br class="clear"/>
          <div class="three columns alpha">

            <label for="contactFormName">Name <span class="red">*</span></label>
            <input type="text" id="contactFormName" name="contact[contact-form-name]" placeholder="Name" autocapitalize="words" value="" required="required" />
          </div>
          <div class="three columns omega">
            <label for="contactFormEmail">Email <span class="red">*</span></label>
            <input type="email" id="contactFormEmail" name="contact[email]" placeholder="Email" autocorrect="off" autocapitalize="off" value="" required="required" />
          </div>



          <label for="contactFormMessage">Message</label>
          <textarea rows="5" id="contactFormMessage" name="contact[body]" placeholder="Message" required="required"></textarea>

        </div>

        <br class="clear"/>
        <br class="clear"/>

      </form>



      </div>
            </div>


      </div>




    )
  }
}

export default Contact;
