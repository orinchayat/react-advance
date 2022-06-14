import React, { Component } from "react";
import MovieRaw from "./MovieRaw";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}
            <MovieRaw />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
