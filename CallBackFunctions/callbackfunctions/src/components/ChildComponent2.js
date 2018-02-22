import React, { Component } from 'react';



class ChildComponent2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      addnumber: 0
    }
  }

  handleInput(value){
    this.setState({
      addnumber: value
    })
  }

  handleInputAdd(){
    this.props.AddSpecificToCounter(this.state.addnumber)
  }

  handleSimpleAdd(){
    this.props.AddToCounter()
  }

  render() {
    return (
        <div style={{backgroundColor: "orange"}}>
          <h1>
            Inside ChildComponent2
          </h1>
          <button onClick={()=>{this.handleSimpleAdd()}}>Add to ChildComponent1 counter!</button>
          <h2>
            Or you can specify a number to add!
          </h2>
          <input onChange={(e)=>{this.handleInput(e.target.value)}}/>
          <button onClick={()=>{this.handleInputAdd()}}>Add Specific Number to Counter~</button>
        </div>
    );
  }
}

export default ChildComponent2;
