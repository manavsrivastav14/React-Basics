import { Component } from "react";

class MovieCard extends Component {
  // Using arrow function so binding can be avoided

  addStars = () => {
    // this.state.stars += 0.5;

    // Form 1 of setState
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });

    // Form 2 of setState
    this.setState((prevState) => {
      if (prevState.stars <= 4.5) {
        return {
          stars: prevState.stars + 0.5,
        };
      }
    });
  };

  removeStars = () => {
    this.setState((prevState) => {
      if (prevState.stars >= 0.5) {
        return {
          stars: prevState.stars - 0.5,
        };
      }
    });
  };

  handleFavouriteButtonClick = () => {
    this.setState((prevState) => {
      return {
        favourite: !prevState.favourite,
      };
    });
  };

  handleCartButtonClick = () => {
    this.setState((prevState) => {
      return {
        addToCart: !prevState.addToCart,
      };
    });
  };

  render() {
    // console.log(this.props);
    const { title, plot, price, rating, star, fav, isInCart, poster } =
      this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src={poster} />
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
                  onClick={() => this.props.addStars(this.props.movies)}
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
                  onClick={this.removeStars}
                />
              </div>
              <span className="starCount">{star}</span>
              {fav ? (
                <button
                  className="unfavourite-btn"
                  onClick={this.handleFavouriteButtonClick}
                >
                  Unfavourite
                </button>
              ) : (
                <button
                  className="favourite-btn"
                  onClick={this.handleFavouriteButtonClick}
                >
                  Favourite
                </button>
              )}
              <button
                className={isInCart ? "remove-cart-btn" : "cart-btn"}
                onClick={this.handleCartButtonClick}
              >
                {isInCart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
