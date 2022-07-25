/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Button";
import { useState } from "react";
import "./styles.css";

const Form = (props) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");
  const [value, setValue] = useState(0);

  const handleList = () => {
    props.setList((oldList) => [
      ...oldList,
      {
        description: description,
        type: type,
        value: value,
      },
    ]);
  };

  return (
    <div className="container">
      <form>
        <div className="description">
          <label htmlFor="description">Descrição</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            placeholder="Digite aqui sua descrição"
            required
          />
          <p>Ex: compra de roupa</p>
        </div>

        <div className="form-group">
          <div className="value">
            <label htmlFor="value">Valor</label>
            <input
              type="number"
              onChange={(e) => setValue(e.target.value)}
              name="value"
              placeholder="R$ 00,00"
              required={true}
            />
          </div>

          <div className="type">
            <label htmlFor="typeInput">Tipo de entrada</label>
            <select
              name="typeInput"
              onChange={(e) => setType(e.target.value)}
              id=""
            >
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
          </div>
        </div>
        <Button
          color="#FD377E"
          value="Inserir"
          colorText="#fff"
          width="100%"
          onClick={() => {
            handleList();
          }}
        >
          Inserir
        </Button>
      </form>
    </div>
  );
};

export default Form;
