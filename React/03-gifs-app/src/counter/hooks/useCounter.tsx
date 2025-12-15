import { useState } from "react";

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => setCounter(counter + 1);
  const handleSubtract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(initialValue);

  return {
    //Proporties
    counter,
    //Methods/actions
    handleAdd,
    handleSubtract,
    handleReset,
  };
};
