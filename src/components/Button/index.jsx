/* eslint-disable react/prop-types */
import React from "react";
import "./styles.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      style={{
        background: props.color,
        color: props.colorText,
        width: props.width,
      }}
    >
      {props.value}
    </button>
  );
};

export default Button;
