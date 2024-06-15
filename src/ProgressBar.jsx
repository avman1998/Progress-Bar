import React from "react";

const ProgressBar = ({ progress, color }) => {
  const style = {
    backgroundColor: color,
    width: `${progress}%`,
    height: 30,
  };
  const containerStyle = {
    height: 30,
    width: "400px",
    border: "1px solid black",
  };
  return (
    <div style={containerStyle}>
      <div style={style}>{progress}%</div>
    </div>
  );
};

export default ProgressBar;
