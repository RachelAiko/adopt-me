import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";



const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Halo",
      animal: "Cat",
      breed: "Nice kitty",
    }),
    React.createElement(Pet, {
      name: "Turtle",
      animal: "Water turtle",
      breed: "Red-ear slider",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
