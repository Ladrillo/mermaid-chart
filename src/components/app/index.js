import React, { Component } from 'react';
import Chart from '../chart';
import * as c from '../../constants';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';


export class App extends Component {
  render() {
    return (
      <div>
        <Chart />
        <button onClick={this.props.helloWorld}><h1>hello</h1></button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(state => state, mapDispatchToProps)(App);
