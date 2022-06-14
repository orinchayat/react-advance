import React, { Component } from "react";
import CartContext from "./context/cartContext";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./Login";

class App extends Component {
  state = { currentUser: null, cart: [] };

  handleLoggedIn = (userName) => {
    const user = { name: "Orin" };
    this.setState({ currentUser: user });
  };

  handleAddCart = (movie) => {
    const cart = [...this.state.cart];
    cart.push(movie);
    this.setState({ cart });
  };
  render() {
    return (
      <CartContext.Provider
        value={{ cart: this.state.cart, onAddMovie: this.handleAddCart }}
      >
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
