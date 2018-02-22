import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'

//More good examples here: https://reacttraining.com/react-router/web/example/basic

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div style={{display: "inline-block", height: "5vh", width: "100vw", backgroundColor: "rgb(200,170,240)"}}>
              <Link to="/" style={{backgroundColor: "rgb(200, 180, 135)"}}>Go to Component1</Link> &nbsp;
              <Link to="/componentTwo" style={{backgroundColor: "rgb(200, 180, 135)"}}>Go to Component2</Link> &nbsp;
              <Link to="/componentThree" style={{backgroundColor: "rgb(200, 180, 135)"}}>Go to Component3</Link> &nbsp;
            </div>

             <Route exact path='/' component={Component1} />
             <Route path='/componentTwo' component={Component2} />
             <Route path='/componentThree' component={Component3} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
