import React, { Component } from 'react'
import './GameBox.css';

// class="far fa-paper-plane"

export default class GameBox extends Component {
  render() {
    return (
      <div className="game-box">
        <i className={this.props.class}></i>
      </div>
    );
  }
}
