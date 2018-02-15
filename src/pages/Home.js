import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../style/home-style.css';

class Home extends Component {

  state = {
    val: 0
  }


  printSumn(val) {
    console.log('it works' + val);
  }

  render() {
    return(
      <div>
      <button onClick={() => this.printSumn(this.state.val)}/>
        <nav id="header" class="navbar navbar-default fixed-top">
          <a class="navbar-brand" href="#"><img src="https://cdn.shopify.com/s/files/1/0311/1793/files/h_logo_xlarge1_280x@2x.png" height="60px"/></a>
        </nav>
        <div class="container-fluid">
          <h1>Header:</h1>
          <div class="row">
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
            <div class="col-sm-3">
              <img id="temp" src="https://cdn.shopify.com/s/files/1/0311/1793/products/M17Z1406_-_TOMORROW_LS_TEE_580x@2x.jpg?v=1516131550"/>
            </div>
          </div>
        </div>
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
