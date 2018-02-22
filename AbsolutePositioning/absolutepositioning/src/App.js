import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{position: "relative", height: "100vh", width: "100vw"}}>
          <div style={{position: "absolute", top: "10vh", left: "20vw", height: "10vh", width: "10vw", backgroundColor: "orange"}}>
            <p>
              hey here is a div
            </p>
          </div>
          <div style={{position: "absolute", bottom: "10vh", right: "20vw", height: "20vh", width: "10vw", backgroundColor: "red"}}>
            <p>
              and another one.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
