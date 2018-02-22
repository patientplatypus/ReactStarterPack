import React, { Component } from 'react';
import './App.css';
import ParentComponent from './components/ParentComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>
            This is how you do callback functions in react!
          </h1>
        </div>
        <ParentComponent/>
      </div>
    );
  }
}

export default App;
