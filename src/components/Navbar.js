import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const [input, setInput] = React.useState("");
  const eventHandler = (event) => {
    setInput(event.target.value);
    props.passFun(event.target.value);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: "none" }}>
          <a className="navbar-brand" href="#">
            Home
          </a>
        </Link>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={input}
          style={{ width: "50%", maxWidth: "300px" }}
          onChange={eventHandler}
        />
      </div>
    </nav>
  );
};

export default Navbar;
