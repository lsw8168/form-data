import React from "react";
import Input from "./Input";

const MyForm = ({ data, onSubmit }) => {
  const [getData, setGetData] = React.useState(data);

  const handleChange = event => {
    setGetData({
      ...getData,
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
    onSubmit({ ...fieldsData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="username"
        label="이름"
        value={getData.username}
        onChange={handleChange}
      />
      <br />
      <Input
        type="email"
        id="email"
        label="이메일"
        value={getData.email}
        onChange={handleChange}
      />
      <br />
      <Input
        type="text"
        id="birthdate"
        label="생일"
        value={getData.birthdate}
        onChange={handleChange}
      />
      <br />
      <br />
      <div>
        {getData.username}, {getData.email}, {getData.birthdate}
      </div>
      <br />
      <div>
        {data.username}, {data.email}, {data.birthdate}
      </div>
      <br />
      <button type="submit">저장</button>
    </form>
  );
};

export default MyForm;
