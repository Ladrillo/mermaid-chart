import React, { Component } from 'react';
import Chart from '../chart';
import * as c from '../../constants';


export default class App extends Component {
  state = {
    app: {
      started: false,

    }
  }

  render() {
    return (
      <div>
        <Chart />
      </div>
    );
  }
}
