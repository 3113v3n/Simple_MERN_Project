import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/Validator";
import Button from "../../shared/FormElements/Button";
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
  const placeId = useParams().placeId;
  const placeToUpdate = DUMMY_PLACES.find((place) => place.id === placeId);
  if (!placeToUpdate) {
    return (
      <div className="center">
        <h2>Couldn't Find Place</h2>
      </div>
    );
  }
  return (
    <form>
      <Input
        id={"title"}
        type={"text"}
        label={"Title"}
        element={"input"}
        errorText={"Please Enter Valid Title"}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={() => {}}
        valid={true}
        value={placeToUpdate.title}
      />
      <Input
        id={"description"}
        element={"textarea"}
        label={"Description"}
        errorText={"Please Enter Valid Description ( at least 5 char)"}
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={() => {}}
        valid={true}
        value={placeToUpdate.title}
      />
      <Button type={"submit"} disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};
export default UpdatePlace;
