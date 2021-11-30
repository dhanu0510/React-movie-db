import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import topMoviesList from "./components/TopMovies";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate
} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error";

const App = () => {
  const [movieName, setMovieName] = React.useState("");
  const setMovieNameFromSearch = (name) => {
    setMovieName(name);
  };
  const [movies, setMovies] = React.useState([]);
  const getData = async () => {
    try {
      const url = `https://www.omdbapi.com/?s=${movieName}&apikey=1445b48c`;
      const res = await fetch(url);
      const resJson = await res.json();
      if (resJson.Response === "True") {
        setMovies(resJson.Search);
      }
    } catch (error) {}
  };
  useEffect(() => {
    <Navigate to="/" />;
    if (movieName.length >= 3) {
      getData();
    } else if (movieName.length === 0) {
      setMovies(topMoviesList);
    }
  }, [movieName]);
  return (
    <>
      <Router>
        <Navbar passFun={setMovieNameFromSearch} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container cards">
                <Card movies={movies} />
              </div>
            }
          />
          <Route exact path="/movie/:imdbID" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
