import React, { useContext } from "react";
import UserContext from "./context/userContext";

function Login(props) {
  const userContext = useContext(UserContext);
  return (
    <div>
      <button onClick={() => userContext.onLoggedIn("Orin")}>Login</button>
    </div>
  );
}

export default Login;
