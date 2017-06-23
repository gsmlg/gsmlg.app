// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  componentDidMount() {
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        frameRate: { ideal: 60, min: 30 },
        width: 1280, height: 720
      }
    }).then((mediaStream) => {
      let video = this.refs.video;
      video.srcObject = mediaStream;
      video.onloadedmetadata = function(e) {
        video.play();
      };
    })
      .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.;
  }

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
      <div className="mirror-wrapper" data-tid="container">
        <video className="mirror" ref='video' />
      </div>
    );
  }
}
