// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    let {
      domain,
      address,
      isLooking,
      changeValue,
      error,
      lookup
    } = this.props;

    return (
      <div className="container" data-tid="container">
        <div className="input-group">
          <span className="input-group-addon">dig</span>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
          <span className="input-group-addon" id="sizing-addon1">@</span>
          <input type="text" className="form-control" placeholder="DNS Server" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Go!</button>
          </span>
        </div>
      </div>
    );
  }
}
