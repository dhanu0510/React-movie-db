import React from "react";
import "./components.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none" }}>
          <div className="card">
            <div className="rating-div">
              {/* <span class="badge bg-warning">4</span> */}
            </div>
            <img
              src={movie.Poster}
              className="card-img-top"
              alt={movie.Title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">
                Year: <span>{movie.Year}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
