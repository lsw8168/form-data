import React from "react";
import Input from "./Input";

const MyForm = ({ data }) => {
  console.log("data", data);
  const [state, setState] = React.useState(data);
  const [ui, setUi] = React.useState(data);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const fieldsData = Array.prototype.slice
      .call(event.target)
      .filter(el => el.name)
      .reduce(
        (form, el) => ({
          ...form,
          [el.name]: el.value
        }),
        {}
      );
    setUi({ ...fieldsData });
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="username"
        label="이름"
        value={state.username}
        onChange={handleChange}
      />
      <br />
      <Input
        type="email"
        id="email"
        label="이메일"
        value={state.email}
        onChange={handleChange}
      />
      <br />
      <Input
        type="text"
        id="birthdate"
        label="생일"
        value={state.birthdate}
        onChange={handleChange}
      />
      <br />
      <br />
      <div>
        {ui.username}, {ui.email}, {ui.birthdate}
      </div>
      <br />
      <button type="submit">저장</button>
    </form>
  );
};

export default MyForm;
