import React from "react";

const DivBorder = (props) => {
  const borderColor = props.color ? props.color : "black";
  return (
    <div
      style={{
        border: `2px solid ${borderColor}`,
        margin: "5px",
        padding: "5px",
      }}
    >
      {/* JSX GOES HERE */}
      {props.children}
    </div>
  );
};

export default DivBorder;