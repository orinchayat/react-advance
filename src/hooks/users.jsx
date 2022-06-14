import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(users);
    }
    getUsers();
  });
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default Users;
