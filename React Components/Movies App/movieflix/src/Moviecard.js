import { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural Powers shown in the movie.",
      price: 199,
      rating: 8.9,
      stars: 0,
    };
  }
  addStars = () => {
    // this.state.stars += 0.5;

    // Form 1 of setState
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });

    // Form 2 of setState
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  };
  removeStars() {}

  render() {
    const { title, plot, price, rating, stars } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  alt="increase-star"
                  className="str-btn"
                  onClick={this.addStars}
                />
                <img
                  src="https://t4.ftcdn.net/jpg/00/61/25/93/240_F_61259351_3EL2WAZWZTXSQb1dPEzWu0yFLZNfIzFC.jpg"
                  alt="star"
                  className="stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  alt="decrease-star"
                  className="str-btn"
                />
              </div>
              <span className="starCount">{stars}</span>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;