const HttpErrorHandler = require("../model/errorHandler");
const uuid = require("uuid");
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Game of Thrones",
    description: "Winter is Coming",
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
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1p",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => p.id === placeId);
  if (!place) {
    next(
      new HttpErrorHandler("Couldnt find a place with the provided id", 404)
    ); //we use next for asynchronous code
  }
  res.json({ place: place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => p.creator === userId);
  if (!place) {
    throw new HttpErrorHandler(
      "Couldnt find a place with the provided id",
      404
    );
  }
  res.json({ place: place });
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
  const newPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };
  DUMMY_PLACES.push(newPlace);
  res.status(201).json({ place: newPlace });
};

const deletePlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const placeToDelete = DUMMY_PLACES.filter((place) => place.id !== placeId);
  res.status(200).json({ message: "Deleted Successfully" });
};
const patchPlaceByid = (req, res, next) => {
  const { title, description } = req.body;
  const placeId = req.params.pid;
  const placeToUpdate = {
    ...DUMMY_PLACES.find((place) => place.id === placeId),
  };
  //the spread operator creates a copy of original array [immutability]
  const placeIndex = DUMMY_PLACES.findIndex((place) => place.id === placeId);
  //find index of object to update
  placeToUpdate.title = title;
  placeToUpdate.description = description;
  //replace the object with new values
  DUMMY_PLACES[placeIndex] = placeToUpdate;

  res.status(200).json({ place: placeToUpdate });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.deletePlaceById = deletePlaceById;
exports.patchPlaceByid = patchPlaceByid;
