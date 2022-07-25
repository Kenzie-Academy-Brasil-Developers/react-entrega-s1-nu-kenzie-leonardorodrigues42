/* eslint-disable react/prop-types */

import "./App.css";
import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import List from "./components/List";
import TotalContainer from "./components/TotalContainer";

function App() {
  const [listTransations, setListTransations] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: 150 },
    { description: "Conta de agua", type: "Saída", value: 80 },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="main">
          <div className="control">
            <Form list={listTransations} setList={setListTransations} />
            <TotalContainer list={listTransations} />
          </div>
          <List list={listTransations} setList={setListTransations} />
        </div>
      </main>
    </div>
  );
}

export default App;
