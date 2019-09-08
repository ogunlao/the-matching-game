import React, { Component } from "react";
import "./GameBox.css";

// class="far fa-paper-plane"

export default class GameBox extends Component {
  /**
   * handleToggle = () => this.props.onToggle(box)
   */
  render() {
    const box = this.props.box;
    return box.open ? (
      <div className="game-box" onClick={() => this.props.onToggle(box)}>
        <i className={box.class}></i>
      </div>
    ) : (
      <div
        key={box.id}
        className="game-box close"
        onClick={() => this.props.onToggle(box)}
      />
    );
  }
}
