import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: 7654567,
      name: "H4wk3y3",
      image:
        "https://cdn.pixabay.com/photo/2020/05/25/03/37/doctor-5216835__340.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
