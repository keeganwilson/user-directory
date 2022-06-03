import React, { useState } from "react";
import "./user.css";
import data from "../data";

const User = (props) => {
  const users = props.data.slice(0, data.length);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  let user = users[index];

  const newUser = {
    id: users.length + 1,
    name: {
      first: "",
      last: "",
    },
    city: "",
    country: "",
    employer: "",
    title: "",
    favoriteMovies: ["", "", ""],
  };

  const next = () => {
    setIndex(index + 1);
  };

  const previous = () => {
    setIndex(index - 1);
  };

  const deleteCurr = () => {
    data.splice(index, 1);
    index <= data.length - 1 ? setIndex(index + 1) : setIndex(index - 1);
  };

  const add = (event) => {
    event.preventDefault();
    users.push(newUser);
    setShow(!show);
  };

  const changeHandler = (event) => {
    let key = event.target.name;
    newUser[key] = event.target.value;
  };

  const nameChangeHandler = (event) => {
    let key = event.target.name;
    newUser.name[key] = event.target.value;
  };

  const moviesHandler = (event) => {
    let index = event.target.name;
    newUser.favoriteMovies[index] = event.target.value;
  };

  const showForm = () => {
    setShow(!show);
  };

  return (
    <div id="background">
      <div id="card-main">
        <form className={show ? "user-form" : "hide-form"}>
          <p>
            First Name: <input name="first" onChange={nameChangeHandler} />
          </p>
          <p>
            Last Name: <input name="last" onChange={nameChangeHandler} />
          </p>
          <p>
            City: <input name="city" onChange={changeHandler} />
          </p>
          <p>
            Country: <input name="country" onChange={changeHandler} />
          </p>
          <p>
            Job Title: <input name="title" onChange={changeHandler} />
          </p>
          <p>
            Employer: <input name="employer" onChange={changeHandler} />
          </p>
          <h3>Favorite Movies</h3>
          <p>
            1: <input name="0" onChange={moviesHandler} />
          </p>
          <p>
            2: <input name="1" onChange={moviesHandler} />
          </p>
          <p>
            3: <input name="2" onChange={moviesHandler} />
          </p>
          <button onClick={add}>Add User</button>
        </form>
        <h2 id="count">
          {user.id}/{users.length}
        </h2>
        <div id="card-data">
          <span>
            <h1 id="name">
              {user.name.first} {user.name.last}
            </h1>
            <div id="line"></div>
          </span>
          <div id="details">
            <div className="info-container">
              <h3 className="user-info">From: </h3>
              <p>
                {user.city}, {user.country}
              </p>
            </div>
            <div className="info-container">
              <h3 className="user-info">Job Title: </h3>
              <p>{user.title}</p>
            </div>
            <div className="info-container">
              <h3 className="user-info">Employer: </h3>
              <p>{user.employer}</p>
            </div>
          </div>
          <div id="movies">
            <h3 className="user-info">Favorite Movies:</h3>
            <p className="movie">1. {user.favoriteMovies[0]}</p>
            <p className="movie">2. {user.favoriteMovies[1]}</p>
            <p className="movie">3. {user.favoriteMovies[2]}</p>
          </div>
        </div>
      </div>
      <div id="button-container">
        {index === 0 ? (
          <button className=" nav-button hide"></button>
        ) : (
          <button className="nav-button" onClick={previous}>
            {"<"} Previous
          </button>
        )}
        <div id="edit-container">
          <button className="info-button">Edit</button>
          <button className="info-button" onClick={deleteCurr}>
            Delete
          </button>
          <button className="info-button" onClick={showForm}>
            New
          </button>
        </div>
        {index === data.length - 1 ? (
          <p className=" nav-button hide"></p>
        ) : (
          <button className="nav-button" onClick={next}>
            Next {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
