import React from "react";

const titleStyle = {
  width: "fit-content",
  fontVariant: "small-caps",
  position: "relative",
  display: "grid",
  placeItems: "center",
};

const Title = () => {
  return <div style={titleStyle}>
    <h2>Le Nostre Vacanze</h2>
    <div className="underline"></div>
  </div>;
};

export default Title;