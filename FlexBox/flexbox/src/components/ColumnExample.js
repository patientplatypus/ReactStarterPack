import React, { Component } from 'react';

class ColumnExample extends Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", backgroundColor: "red", height: "100%"}}>
        <div style={{backgroundColor: "orange", flex: "1"}}>
          <p>
            flex 1 !
          </p>
        </div>
        <div style={{backgroundColor: "purple", flex: "3"}}>
          <p>
            flex 3 !
          </p>
        </div>
      </div>
    );
  }
}

export default ColumnExample;
