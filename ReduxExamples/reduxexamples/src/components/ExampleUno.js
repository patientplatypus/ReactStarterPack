

import React, { Component } from 'react';

import { actionREDUCER1 } from '../redux';
import { connect } from 'react-redux'

import renderIf from 'render-if';

class ExampleUno extends Component {
  constructor(props){
    super(props)
    this.state = {
      reducer1: null
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.reducer1!=this.props.reducer1){
      // console.log('value of nextProps.reducer1: ', nextProps.reducer1["Persons"][0]["FirstName"]);
      this.setState({
        reducer1: nextProps.reducer1["Persons"][0]["FirstName"]
      })
    }
  }

  buttonClick(){
    this.props.actionreducer1()
  }



  render() {
    return (
      <div style={{backgroundColor: "orange"}}>
        <div>
          <h1>
            Inside ExampleUno
          </h1>
        </div>
        <br/><br/>
        <div>
          <button onClick={()=>{this.buttonClick()}}>Retrieve Data</button>
        </div>
        {renderIf(this.state.reducer1!=null)(
          <div>
            <p>
              Value of axios call: {this.state.reducer1}
            </p>
          </div>
        )}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
    return({
      actionreducer1: (e)=>{dispatch(actionREDUCER1(e))},
    })
}

function mapStateToProps(state) {
    return({
      reducer1: state.reducer1,
    })
}

export default (connect(
    mapStateToProps, mapDispatchToProps)(
    ExampleUno
))
