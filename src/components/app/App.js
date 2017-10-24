import React, { Component } from 'react';
import styled from 'styled-components';
import Chart from '../chart';
import * as c from '../../constants';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import SetupDropdown from '../setup_dropdown';


const Styled = styled.div`
  display: flex;

  .graph {
    margin: 20px;
    height: 100%;
  }

  .setup {
    margin: 20px;
  }

  .monitor {
    margin: 20px;

    .stage {
      margin: 5px;
    }
  }
`;


export class App extends Component {
  loginHandler = () => {
    this.props.setToken();
    this.props.hideLogin();
    this.props.findToken();
  }

  render() {
    return (
      <Styled>
        <div className='graph'>
          <Chart />
        </div>
        <div>
          <div className='setup'>
            <SetupDropdown name={c.stage.appStart} success='SUCCEEDS' failure='FAILS' />
            <SetupDropdown name={c.stage.threadsStart} success='SUCCEEDS' failure='FAILS' />
            <SetupDropdown name={c.stage.tokenFind} success='TOKEN PRESENT' failure='TOKEN MISSING' />
          </div>
          <button onClick={this.props.start}><h1>Navigate to App</h1></button>
          <div className='monitor'>
            {
              Object.keys(this.props.monitor).map(stage => (
                <div key={stage} className='stage'>
                  {stage}: {this.props.monitor[stage]
                    ? <span style={{color: 'green'}}>yeah</span>
                    : <span style={{color: 'red'}}>nope</span>
                  }
                </div>
              ))
            }
          </div>
          <div className='loginScreen'>
            {
              this.props.loginVisible &&
              <button onClick={this.loginHandler}><h2>LOGIN</h2></button>
            }
          </div>
        </div>
      </Styled>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(state => state, mapDispatchToProps)(App);
