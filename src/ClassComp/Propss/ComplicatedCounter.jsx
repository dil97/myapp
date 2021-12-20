import React, { useReducer } from "react";

const initalState = {
  second: 100,
  first: 9,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, first: state.first + action.value };
    // /...state ko clone(Copy kr ke rh re)
    case "Decrement":
      return { ...state, first: state.first - action.value };
    case "Increment2":
      return { ...state, second: state.second + action.value };
    case "Decrement2":
      return { ...state, second: state.second - action.value };
    case "Multiplication":
      return { first: state.first * action.value };
    case "Reset":
      return initalState;
    default:
      return state;
  }
};
const ComplicatedCounter = () => {
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <h1 style={{ color: "darkgray", width: "100px" }}>
        {" "}
        Complicated useReducer !!!
      </h1>
      <div style={{ backgroundColor: "hotpink" }}>
        <h3>count :{count.first} </h3>
        <button onClick={() => dispatch({ type: "Increment", value: 2 })}>
          Increment
        </button>

        {/* // action is a one object to increment type:"increment " */}
        <button onClick={() => dispatch({ type: "Decrement", value: 3 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "Reset" })}>Rest</button>
        <button onClick={() => dispatch({ type: "Multiplication*2" })}>
          Multi
        </button>

        <hr />

        <div style={{ backgroundColor: "crimson" }}>
          <h3>Second count :{count.second} </h3>
          <button onClick={() => dispatch({ type: "Increment2", value: 100 })}>
            Increment
          </button>

          {/* // action is a one object to increment type:"increment " */}
          <button onClick={() => dispatch({ type: "Decrement2", value: 50 })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: "Reset" })}>Rest</button>
        </div>
      </div>
    </div>
  );
};

export default ComplicatedCounter;
