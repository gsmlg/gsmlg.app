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
      <div>
        <div className={styles.container} data-tid="container">
          <h3 className={styles.h3}>DNS查询</h3>
          <div className={styles.input}>
            <input className={styles.ipt} type="text" onChange={changeValue} value={domain} />
            <input className={styles.iptn} type="button" value="查询" onClick={() => lookup()}/>
          </div>
          <div className={styles.state}>
            <div>looking at: {domain.toLowerCase()}</div>
            <div>Address: {address ? address : 'N/A'}</div>
            <div>{error ? error.code : ''}</div>
          </div>
        </div>
      </div>
    );
  }
}
