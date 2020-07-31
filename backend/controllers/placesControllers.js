const HttpErrorHandler = require("../model/errorHandler");
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

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
