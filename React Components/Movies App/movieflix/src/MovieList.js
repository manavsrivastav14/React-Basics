import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
  render() {
    return (
      <>
        <h1>MovieList</h1>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </>
    );
  }
}

export default MovieList;
