import React from "react";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/Validator";
import "./Auth.css";
import useFormHook from "../../shared/hooks/formHook";

const Auth = () => {
  const [formState, inputHandler] = useFormHook(
    {
      email: { value: "", isValid: false },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const loginHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <Card className={"authentication"}>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={loginHandler}>
        <Input
          id={"email"}
          type={"text"}
          label={"Email"}
          element={"input"}
          errorText={"Please Enter Valid Email"}
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
        />
        <Input
          id={"password"}
          type={"password"}
          label={"Password"}
          element={"input"}
          errorText={"Password is too short"}
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
        />
        <Button>Login</Button>
      </form>
    </Card>
  );
};
export default Auth;
