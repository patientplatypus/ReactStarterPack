import React, { Component } from 'react';


import ExampleUno from './components/ExampleUno';
import ExampleDos from './components/ExampleDos';


class App extends Component {
  render() {
    return (
      <div>
        <ExampleUno />
        <br/><br/><br/>
        <ExampleDos />
      </div>
    );
  }
}

export default App;
