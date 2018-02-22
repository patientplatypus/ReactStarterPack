import React, { Component } from 'react';

import './gridexample2.css'
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';

class GridExample2 extends Component {
  render() {
    return (
      <div className="parent">
        <div className="header">
          <Component1/>
        </div>
        <div className="main">
          <Component2/>
        </div>
        <div className="sidebar">
          <Component3/>
        </div>
        <div className="footer">
          <Component4/>
        </div>
      </div>
    );
  }
}

export default GridExample2;
