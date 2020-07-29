import React from "react";
import Input from "../../shared/FormElements/Input";
import "./NewPlace.css";

const NewPlace = () => (
  <form className="place-form">
    <Input
      type={"text"}
      label={"Title"}
      element={"input"}
      errorText={"Please Enter Valid Title"}
    />
  </form>
);

export default NewPlace;
