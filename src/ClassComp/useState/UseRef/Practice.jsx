import { useEffect, useRef, useState } from "react";

const Practice = () => {
  const intervalRef = useRef();
  const [Timer, setTimer] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>This is funcation peratice</h1>
      <h2>fucation Timeer:{Timer}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>intervalRef</button>
    </div>
  );
};

export default Practice;
