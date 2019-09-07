import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  render() {
    return (
      <div className="container">
        <h1 className="game-title">Matching Game</h1>
        <div className="game-stats">
          <span className="game-stats__star">
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </span>
          <span className="game-stats__time">01:21</span>
          <span className="game-stats__moves">8 Moves</span>
          <span className="game-stats__replay">
            <i className="fas fa-redo"></i>
          </span>
        </div>
        <div className="game-container">
          <div className="front back game-card">
            <i className="fas fa-anchor"></i>
          </div>
          <div className="game-card">
            <i className="far fa-paper-plane"></i>
          </div>
          <div className="game-card"></div>
          <div className="game-card">
            <i className="far fa-paper-plane"></i>
          </div>
          <div className="game-card">
            <i className="fas fa-anchor"></i>
          </div>
          <div className="game-card">
            <i className="far fa-paper-plane"></i>
          </div>
          <div className="game-card">
            <i className="fas fa-anchor"></i>
          </div>
          <div className="game-card"></div>
          <div className="game-card">
            <i className="fas fa-anchor"></i>
          </div>
          <div className="game-card">
            <i className="far fa-paper-plane"></i>
          </div>
          <div className="game-card">
            <i className="fas fa-anchor"></i>
          </div>
          <div className="game-card">
            <i className="far fa-paper-plane"></i>
          </div>
          <div className="game-card">
            <i className="fas fa-anchor"></i>
          </div>
          <div className="game-card">
            <i className="far fa-paper-plane"></i>
          </div>
          <div className="game-card">
            <i className="fas fa-anchor"></i>
          </div>
          <div className="game-card">
            <i className="far fa-paper-plane"></i>
          </div>
        </div>
      </div>
    );
  }
}

