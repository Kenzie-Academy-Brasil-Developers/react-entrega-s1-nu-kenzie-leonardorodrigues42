/* eslint-disable react/prop-types */
import React from "react";
import "./styles.css";

const TotalContainer = (props) => {
  const arrayValue = props.list.map((item) => {
    if (item.type === "Entrada") {
      return item.value;
    } else {
      return -item.value;
    }
  });

  const totalValue = arrayValue.reduce((previousValue, currentValue) => {
    console.log(typeof previousValue, typeof parseInt(currentValue));
    return parseInt(previousValue) + parseInt(currentValue);
  }, 0);

  console.log(totalValue);

  return (
    <div className="container-totalValue">
      <div className="text">
        <span>
          <b>Valor total:</b>
        </span>
        <span className="obs">O valor se refere ao saldo</span>
      </div>
      <span>
        <b>R$ {totalValue}</b>
      </span>
    </div>
  );
};

export default TotalContainer;
