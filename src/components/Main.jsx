import React from "react";
import Header from "./Header";
import User from "./User";
import data from "../data";

const Main = () => {
  return (
    <>
      <Header />
      <User data={data} />
    </>
  );
};

export default Main;
