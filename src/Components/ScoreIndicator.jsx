// Pris sur internet

import React, { Component } from "react";

function ScoreIndicator({ value, maxValue }) {
  const val = (value / maxValue) * 100;
  const deg = (180 / 100) * val;
  return (
    <div className="indicator">
      <span className="bar" style={{ transform: `rotate(${deg}deg)` }} />
      <span className="result">
        <span>{value}</span>/<span>{maxValue}</span>
      </span>
    </div>
  );
}

export default ScoreIndicator;