// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Home from '../components/Home';
import {lookup, changeValue} from '../actions/dns';
//import * as dnsActions from '../actions/dns';

const mapStateToProps = (state) => ({
  domain: state.dns.domain,
  address: state.dns.address,
  error: state.dns.error,
  isLooking: state.dns.isLooking
});

const mapDispatchToProps = (dispatch) => ({
  lookup: bindActionCreators(lookup, dispatch),
  changeValue: bindActionCreators(changeValue, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
