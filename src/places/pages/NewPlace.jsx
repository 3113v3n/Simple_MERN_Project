import React from "react";
import Input from "../../shared/FormElements/Input";
import "./NewPlace.css";
import { VALIDATOR_REQUIRE } from "../../shared/util/Validator";

const NewPlace = () => (
  <form className="place-form">
    <Input
      type={"text"}
      label={"Title"}
      element={"input"}
      errorText={"Please Enter Valid Title"}
      validators={[VALIDATOR_REQUIRE()]}
    />
  </form>
);

export default NewPlace;
