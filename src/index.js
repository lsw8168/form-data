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

// class MyForm extends React.Component {
//   handleSubmit = event => {
//     event.preventDefault();
//     const fieldsData = Array.prototype.slice
//       .call(event.target)
//       .filter(el => el.name)
//       .reduce(
//         (form, el) => ({
//           ...form,
//           [el.name]: el.value
//         }),
//         {}
//       );

//     console.log(fieldsData);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor="username">이름</label>
//         <input id="username" name="username" type="text" />
//         <br />
//         <label htmlFor="email">이메일</label>
//         <input id="email" name="email" type="email" />
//         <br />
//         <label htmlFor="birthdate">생일</label>
//         <input id="birthdate" name="birthdate" type="text" />
//         <br />
//         <button>저장</button>
//       </form>
//     );
//   }
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
