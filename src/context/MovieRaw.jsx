import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

function MovieRaw(props) {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  return (
    <div>
      Movie row {userContext.currentUser ? userContext.currentUser.name : ""}
      <br />
      <button
        onClick={() => cartContext.onAddMovie({ id: 1, nameOfMovie: "movie" })}
      >
        add movie to cart
      </button>
      <ul>
        {cartContext.cart.map((c) => (
          <li key={Math.random()}>{c.nameOfMovie}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieRaw;
