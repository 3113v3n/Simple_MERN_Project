import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

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

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
