import React from "react";

export default function Avatar({ photoURL }) {
  const imgStyles = {
    position: "absolute",
    height: "auto",
    width: "100%"
  };
  return (
    <span
      className="d-flex "
      style={{
        position: "relative",
        width: "75px",
        height: "75px",
        overflow: "hidden"
      }}>
      <img src={photoURL} style={imgStyles} />
    </span>
  );
}
