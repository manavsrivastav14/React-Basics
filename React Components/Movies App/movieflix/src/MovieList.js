import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural Powers shown in the movie.",
      price: 199,
      rating: 8.9,
      stars: 0,
      favourite: false,
      addToCart: false,
    };
  }

  render() {
    return (
      <>
        <MovieCard movies={this.state} />
      </>
    );
  }
}

export default MovieList;
