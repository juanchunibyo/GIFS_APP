import { useState } from "react";

export const useCounter = () => {
  const [counter, setcounter] = useState(5);

  const handleAdd = () => {
    setcounter(counter + 1);
  };

  const handleSubtract = () => {
    setcounter(counter - 1);
  };

  const handleReset = () => {
    setcounter(5);
  };

  return {
    //values
    counter,

    //methods //Actions
    handleAdd,
    handleReset,
    handleSubtract,
  };
};
