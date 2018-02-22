import React, { Component } from 'react';

class RowExample extends Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "row", backgroundColor: "red"}}>
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

export default RowExample;
