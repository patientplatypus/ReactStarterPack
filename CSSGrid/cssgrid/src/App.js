import React, { Component } from 'react';

import GridExample1 from './components/GridExample1';
import GridExample2 from './components/GridExample2';

//NOTE YOU CAN CHANGE FROM GridExample1 TO GridExample2 BY CHANGING THE CODE BELOW FROM 1 TO 2

class App extends Component {
  render() {
    return (
      <div style={{height: "100%", width: "100%"}}>
        <GridExample2/>
      </div>
    );
  }
}

export default App;
