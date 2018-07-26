import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const divPrimary = {
  "background-color": "tomato",
  padding: 5
};

function App(props) {
  return (
    <div className="App" style={divPrimary}>
      <h1>
        <code>{props.title}</code>
      </h1>
      <h2>Magic do happen!</h2>
    </div>
  );
}

const appElem = (
  <div>
    <App title="Hello World" />
    <hr />
    <App title="Hello Universe" />
  </div>
);
const rootElement = document.getElementById("root");
ReactDOM.render(appElem, rootElement);
