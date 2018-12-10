import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "../LoginForm";

test("handleSubmit function runs once when the form is submitted", () => {
  const handleSubmit = jest.fn();
  const container = document.createElement("div");
  ReactDOM.render(<LoginForm handleClick={handleSubmit} />, container);

  const form = container.querySelector("form");
  const { email, password } = form.elements;

  email.value = "someone has logged in with a username";
  password.value = "a password not important right now";

  form.dispatchEvent(new window.Event("submit"));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
