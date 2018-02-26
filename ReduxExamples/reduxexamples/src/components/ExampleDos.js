

import React, { Component } from 'react';

import { actionREDUCER2 } from '../redux';
import { connect } from 'react-redux'
import renderIf from 'render-if'


class ExampleDos extends Component {
  constructor(props){
    super(props);
    this.state = {
      reducer2: null
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.reducer1!=this.props.reducer1){
      this.setState({
        reducer1: nextProps.reducer1
      })
    }
  }

  buttonClick(value){
    console.log('insid buttonClick')
    var payload = {
      data: value
    }
    this.props.actionreducer2(payload)
  }


  render() {
    return (
      <div style={{backgroundColor: "purple"}}>
        <div>
          <h1>
            Inside ExampleDos
          </h1>
        </div>
        <br/>
        <div>
          <button onClick={()=>{this.buttonClick("Eat Me")}}>Eat Me.</button>
        </div>
        <br/>
        <div>
          <button onClick={()=>{this.buttonClick("Drink Me")}}>Drink Me.</button>
        </div>
        {renderIf(this.state.reducer2!=null)(
          <div>
            <p>
              Value that came back from reducer: {this.state.reducer2}
            </p>
          </div>
        )}


      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return({
      actionreducer2: (e)=>{dispatch(actionREDUCER2(e))},
    })
}

function mapStateToProps(state) {
    return({
      reducer2: state.reducer2,
    })
}

export default (connect(
    mapStateToProps, mapDispatchToProps)(
    ExampleDos
))
