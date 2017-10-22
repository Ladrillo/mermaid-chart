import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import * as c from '../../constants';
import { setup } from '../../actions';


export class SetupDropdown extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.name}><em>{this.props.name}</em></label>
        <select name={this.props.name} onChange={e => this.props.setup(this.props.name, e.target.value)}>
          <option value="yeah">{this.props.success}</option>
          <option value="">{this.props.failure}</option>
        </select>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setup }, dispatch);
}
export default connect(() => ({}), mapDispatchToProps)(SetupDropdown);