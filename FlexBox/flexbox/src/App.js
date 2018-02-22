import React, { Component } from 'react';
import RowExample from './components/RowExample'
import ColumnExample from './components/ColumnExample'

class App extends Component {
  render() {
    return (
      <div style={{height: "100vh", width: "100vw"}}>
        <ColumnExample/>
      </div>
    );
  }
}

export default App;
