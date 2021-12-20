import React, { useReducer } from "react";

const CounterReducer = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      case "Reset":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  const [countSecound, dispatchSecound] = useReducer(reducer, initialState);
  // is a give go funcation useReducer and initialState. state and action is parrameter in action to stote data now switch is
  // is changed thorugh acton

  return (
    <div>
      <h1>Hello use Reducer </h1>
      <div style={{ backgroundColor: "lightblue" }}>
        <h3>CurrentCount:{count}</h3>
        {/* ///count is used as a getter and dispatch to magage state at setter in global level. */}
        <button
          onClick={() => dispatch("Increment")}
          style={{ width: "100px", height: "20px", background: "green" }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch("Decrement")}
          style={{ width: "100px", height: "20px", background: "Red" }}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch("Reset")}
          style={{ width: "100px", height: "20px", background: "Gray" }}
        >
          Reset
        </button>
        {/* increment is a inside the action  */}
          </div>
        <div style={{ backgroundColor: "orange" }}>
        <h3>CurrentCount:{countSecound}</h3>
        {/* ///count is used as a getter and dispatch to magage state at setter in global level. */}
        <button
          onClick={() => dispatchSecound("Increment")}
          style={{ width: "100px", height: "20px", background: "green" }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatchSecound("Decrement")}
          style={{ width: "100px", height: "20px", background: "Red" }}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatchSecound("Reset")}
          style={{ width: "100px", height: "20px", background: "Gray" }}
        >
          Reset
        </button>
        {/* increment is a inside the action  */}
      </div>
    </div>
  );
};

export default CounterReducer;
