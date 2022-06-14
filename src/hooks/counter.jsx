import React, { Fragment, useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  const [counter, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${counter} times`);
  return (
    <Fragment>
      <input onChange={(e) => setName(e.target.value)} />
      <div>
        {name} clicked {counter} times
      </div>
      <button onClick={() => setCount(counter + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
