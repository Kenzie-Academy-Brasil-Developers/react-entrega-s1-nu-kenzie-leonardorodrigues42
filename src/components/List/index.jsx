/* eslint-disable react/prop-types */
import React from "react";
import "./styles.css";
import trash from "../../assets/Property 1=Default.png";

const List = (props) => {
  const handleLTransations = (e) => {
    const target = e.target;
    const newList = props.list.filter(
      (item, _, array) => parseInt(target.id) !== array.indexOf(item)
    );

    console.log(newList);
    props.setList(newList, "teste");
  };

  return (
    <ul className="list">
      {props.list.map((item, index) => {
        return (
          <li
            style={item.type == "Saída" ? { borderColor: "#E9ECEF" } : null}
            className="card"
            key={index}
          >
            <div className="container-description">
              <span className="description">{item.description}</span>
              <span className="type">{item.type}</span>
            </div>
            <div className="container-value">
              <span className="value">R$ {item.value}</span>

              <img
                src={trash}
                id={index}
                onClick={(e) => handleLTransations(e)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
