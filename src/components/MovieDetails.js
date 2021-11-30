import React, { useEffect, useHistory } from "react";
import { useParams } from "react-router";
import "./components.css";

export const MovieDetails = () => {
  const tempDetails = {
    Title: "Iron Man",
    Year: "2008",
    Rated: "PG-13",
    Released: "02 May 2008",
    Runtime: "126 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Jon Favreau",
    Writer: "Mark Fergus, Hawk Ostby, Art Marcum",
    Actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
    Plot:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    Language: "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
    Country: "United States, Canada",
    Awards: "Nominated for 2 Oscars. 21 wins & 73 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.9/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "94%"
      },
      {
        Source: "Metacritic",
        Value: "79/100"
      }
    ],
    Metascore: "79",
    imdbRating: "7.9",
    imdbVotes: "992,483",
    imdbID: "tt0371746",
    Type: "movie",
    DVD: "30 Sep 2008",
    BoxOffice: "$319,034,126",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
  };
  const [movieDetails, setMovieDetails] = React.useState([]);
  const { imdbID } = useParams();
  console.log(imdbID);
  const getData = async () => {
    try {
      const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=1445b48c`;
      const res = await fetch(url);
      const resJson = await res.json();
      if (resJson.Response === "True") {
        setMovieDetails(resJson);
      }
    } catch (error) {
      setMovieDetails(tempDetails);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="movie-details">
      <div className="movie-details-container">
        <div className="movie-details-poster">
          <div className="img">
            <img src={movieDetails.Poster} alt="poster" />
          </div>
          <div className="movie-rating">
            <div className="nameAndRating">
              <h3>{movieDetails.Title}</h3>
              <h2>IMDB : {movieDetails.imdbRating} / 10</h2>
            </div>
          </div>
        </div>
        <div className="movie-details-info">
          <div className="left">
            <p>
              <span>Genre:</span>
              {movieDetails.Genre}
            </p>
            <p>
              <span>Actors: </span>
              {movieDetails.Actors}
            </p>
            <p>
              <span>Director: </span>
              {movieDetails.Director}
            </p>
            <p>
              <span>Writer: </span>
              {movieDetails.Writer}
            </p>
          </div>
          <div className="right">
            <p>
              <span>Released: </span>
              {movieDetails.Released}
            </p>
            <p>
              <span>Runtime: </span>
              {movieDetails.Runtime}
            </p>
            <p>
              <span>Rated: </span>
              {movieDetails.Rated}
            </p>
            <p>
              <span>Box office: </span>
              {movieDetails.BoxOffice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
