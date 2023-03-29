import React, { useState } from "react";

export const Test = () => {
  const [state, setState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });

  const updateState = ({ target }) => {
    setState(
      Object.keys(state).forEach((key) => {
        state[key] = false;
      })
    );

    setState({
      ...state,
      [target.name]: true,
    });
  };

  console.log(state);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={(event) => updateState(event)} name="one">
        one
      </button>
      <button onClick={(event) => updateState(event)} name="two">
        two
      </button>
      <button onClick={(event) => updateState(event)} name="three">
        three
      </button>
      <button onClick={(event) => updateState(event)} name="four">
        four
      </button>
    </div>
  );
};
