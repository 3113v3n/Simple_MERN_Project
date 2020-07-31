import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/Validator";
import Button from "../../shared/FormElements/Button";
import "./PlaceForm.css";
import useFormHook from "../../shared/hooks/formHook";
const img = require("../../images/The Vigilante's Code (A Watch Dogs Fanfic).jpeg");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Game of Thrones",
    description: "Winter is Coming",
    imageUrl: img,
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p3",
    title: "Game of Thrones",
    description: "Winter is Coming",
    imageUrl: img,
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1p",
  },
];
const UpdatePlace = (props) => {
  const [loading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const placeToUpdate = DUMMY_PLACES.find((place) => place.id === placeId);
  const [formState, inputHandler, setFormData] = useFormHook(
    {
      title: { value: placeToUpdate.title, isValid: true },
      description: {
        value: placeToUpdate.description,
        isValid: true,
      },
    },
    true
  );
  useEffect(() => {
    setFormData(
      {
        title: { value: placeToUpdate.title, isValid: true },
        description: {
          value: placeToUpdate.description,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, placeToUpdate]);
  const updateHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  if (!placeToUpdate) {
    return (
      <div className="center">
        <h2>Couldn't Find Place</h2>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="center">
        <h2>Loading</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={updateHandler}>
      <Input
        id={"title"}
        type={"text"}
        label={"Title"}
        element={"input"}
        errorText={"Please Enter Valid Title"}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        initialValid={formState.inputs.title.isValid}
        initialValue={formState.inputs.title.value}
      />
      <Input
        id={"description"}
        element={"textarea"}
        label={"Description"}
        errorText={"Please Enter Valid Description ( at least 5 char)"}
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValid={formState.inputs.description.isValid}
        initialValue={formState.inputs.description.value}
      />
      <Button type={"submit"} disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};
export default UpdatePlace;
