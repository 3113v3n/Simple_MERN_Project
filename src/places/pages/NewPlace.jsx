import React, { useCallback, useReducer } from "react";
import Input from "../../shared/FormElements/Input";
import "./NewPlace.css";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/Validator";
import Button from "../../shared/FormElements/Button";
const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let overallFormIsValid = true; //overall form is valid  ## helper Variable
      for (const inputId in state.inputs) {
        // go through all states in input object
        if (inputId === action.inputId) {
          overallFormIsValid = overallFormIsValid && action.isValid;
          /**
           * We look at the input we are currently updating and set overall validity to true
           * and data passed from isValid property
           */
        } else {
          overallFormIsValid =
            overallFormIsValid && state.inputs[inputId].isValid;
          /**
           * looks at inputs that are not being updated in the state and confirms their validity
           * from existing state value
           */
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: overallFormIsValid,
      };
    default:
      return state;
  }
};
const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    //nested objects
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false, //individual form validity
      },
    },
    isValid: false, //overall form_validity
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

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
