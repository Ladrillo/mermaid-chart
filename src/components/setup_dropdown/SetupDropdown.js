import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import * as c from '../../constants';
import { changeSetup } from '../../actions';


export class SetupDropdown extends Component {
  render() {
    const { name, setup, changeSetup, success, failure } = this.props;

    return (
      <div>
        <label htmlFor={name}>
          <em>{name}</em>
        </label>
        <select
          name={name}
          value={setup[`${name}Allowed`] ? 'yeah' : ''}
          onChange={e => changeSetup(name, e.target.value)}
        >
          <option value="yeah">{success}</option>
          <option value="">{failure}</option>
        </select>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeSetup }, dispatch);
}
export default connect(state => ({ setup: state.setup }), mapDispatchToProps)(SetupDropdown);