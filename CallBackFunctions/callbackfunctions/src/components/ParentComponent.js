import React, { Component } from 'react';
import ChildComponent1 from './ChildComponent1'
import ChildComponent2 from './ChildComponent2'


class ParentComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  AddToCounter(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  AddSpecificToCounter(value){
    var addNumber = Number(value) + Number(this.state.counter)
    this.setState({
      counter: addNumber
    })
  }

  render() {
    return (
        <div style={{backgroundColor: "purple"}}>
          <h1>
            Inside ParentComponent
          </h1>
          <ChildComponent1 counter={this.state.counter}/>
          <ChildComponent2 AddToCounter={this.AddToCounter.bind(this)} AddSpecificToCounter={this.AddSpecificToCounter.bind(this)}/>
        </div>
    );
  }
}

export default ParentComponent;
