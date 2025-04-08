import React from "react";

function Button(props) {
  const styles = {
    backgroundColor: props.bg,
    color: props.color,
    fontSize: "1.2rem",
    width: "300px",
    height: "60px",
  };
  return <button style={styles}>{props.title}</button>;
}

export default Button;
