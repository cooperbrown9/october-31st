import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../style/home-style.css';

class Home extends Component {



  render() {
    return(
      <div class="container-fluid header">
        <div class="row header" >
          <div class="col-sm-6 header-logo">
            <img src="https://cdn.shopify.com/s/files/1/0311/1793/files/h_logo_xlarge1_280x@2x.png?v=1517444057"/>
          </div>
          <div class="col-sm-6 header-items">
            <a class="col-sm-2">HOME</a>
            <a class="col-sm-2">SHOP</a>
            <a class="col-sm-2">CONTACT</a>
          </div>
        </div>
        <div class="row">
          <div class="col-lg item">lol</div>
          <div class="col-sm item">lol</div>
          <div class="col-sm">lol</div>
          <div class="col-sm">lol</div>
        </div>
        <div class="row"></div>
        <div class="row"></div>
      </div>
    )
    // return(
    //   <div className="main-container" >
    //     <div className="header" >
    //       <div className="header-logo"></div>
    //       <div className="nav-items"></div>
    //       <div className="nav-items"></div>
    //     </div>
    //
    //     <div className="item-container" >
    //       <div>1</div>
    //       <div>2</div>
    //       <div>3</div>
    //       <div>4</div>
    //       <div>5</div>
    //       <div>6</div>
    //       <div>5</div>
    //     </div>
    //   </div>
    // )
  }
}

export default Home;
