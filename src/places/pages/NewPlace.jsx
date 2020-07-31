import React, { useCallback, useReducer } from "react";
import Input from "../../shared/FormElements/Input";
import "./PlaceForm.css";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/Validator";
import Button from "../../shared/FormElements/Button";
import useFormHook from "../../shared/hooks/formHook";

const NewPlace = () => {
  const [formState, inputHandler] = useFormHook(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false, //individual form validity
      },
      address: {
        value: "",
        isValid: false, //individual form validity
      },
    },
    false
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form className="place-form" onSubmit={handleSubmit}>
      <Input
        id={"title"}
        type={"text"}
        label={"Title"}
        element={"input"}
        errorText={"Please Enter Valid Title"}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id={"description"}
        element={"textarea"}
        label={"Description"}
        errorText={"Please Enter Valid Description ( at least 5 char)"}
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Input
        id={"address"}
        type={"text"}
        label={"Title"}
        element={"input"}
        errorText={"Please Enter Valid Address"}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Button type={"submit"} disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
