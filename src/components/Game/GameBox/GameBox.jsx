import React from "react";
import "./GameBox.css";

const GameBox = ({box, onToggle}) => {
    return box.open ? (
      <div className="game-box" onClick={()=>onToggle(box)}>
        <i className={box.class}></i>
      </div>
    ) : (
      <div
        className="game-box close"
        onClick={() => onToggle(box)}
      />
    );
  }


export default GameBox;
