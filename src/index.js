import React from "react";
import ReactDOM from "react-dom";
import MyForm from "./components/MyForm";

import "./styles.css";

const initialState = {
  username: "LEE",
  email: "lsw8168@daum.net",
  birthdate: "315"
};

const App = () => <MyForm data={initialState} />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
