import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';


class GridExample1 extends Component {
  render() {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "33vw 33vw 33vw", gridTemplateRows: "50vh 50vh", gridRowGap: "0", height: "100%", width: "100%", padding: "0", margin: "0"}}>
        <div style={{gridRow: "1/2", gridColumn: "1/2"}}>
          <Component1/>
        </div>
        <div style={{gridRow: "2/3", gridColumn: "1/2"}}>
          <Component2/>
        </div>
        <div style={{gridRow: "1/2", gridColumn: "2/3"}}>
          <Component3/>
        </div>
        <div style={{gridRow: "2/3", gridColumn: "2/3"}}>
          <Component4/>
        </div>
        <div style={{gridRow: "1/2", gridColumn: "3/4"}}>
          <Component5/>
        </div>
        <div style={{gridRow: "2/3", gridColumn: "3/4"}}>
          <Component6/>
        </div>
      </div>
    );
  }
}

export default GridExample1;
