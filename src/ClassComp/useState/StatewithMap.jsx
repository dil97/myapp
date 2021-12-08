import React, { useState } from "react";

const StatewithMap = () => {
  const [generate, setGenerate] = useState([]);
  const handleGeneration = () => {
    setGenerate([
      ...generate,
      { id: generate.length, value:Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  ////map l random *10 to 9 tk ke nomber print honge +1 zero nahi hoga
  ///use state behviour privious state ko replace kr rha wo show re ID.///spred operator use to prisiervo state
  return (
    <div>
      <h1>useState Hook with Map</h1>
      <button onClick={handleGeneration}>Generate</button>
      {generate.map((elem, id) => {
        return(<li key={id}>
          {""}
          number:{elem.value} , ID:{id} {""}{" "}
        </li>);
      })}
    </div>
  );
};

export default StatewithMap;
