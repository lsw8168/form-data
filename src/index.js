import React from "react";
import ReactDOM from "react-dom";
import MyForm from "./components/MyForm";

import "./styles.css";

const initialState = {
  username: "LEE",
  email: "lsw8168@daum.net",
  birthdate: "315"
};

const App = () => {
  const [formData, setFormData] = React.useState(initialState);
  const onSubmit = data => {
    setFormData(data);
  };
  return <MyForm data={formData} onSubmit={onSubmit} />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
