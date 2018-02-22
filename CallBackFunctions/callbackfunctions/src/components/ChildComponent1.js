import React, { Component } from 'react';



class ChildComponent1 extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <div style={{backgroundColor: "green"}}>
          <h1>
            Inside ChildComponent1
          </h1>
          <h2>
            Value of Counter in ChildComponent1: {this.props.counter}
          </h2>
        </div>
    );
  }
}

export default ChildComponent1;
