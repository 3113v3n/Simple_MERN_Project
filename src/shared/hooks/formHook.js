import { useCallback, useReducer } from "react";
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
const useFormHook = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    //nested objects
    inputs: initialInputs,
    isValid: initialFormValidity, //overall form_validity
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);
  return [formState, inputHandler];
};
export default useFormHook;
