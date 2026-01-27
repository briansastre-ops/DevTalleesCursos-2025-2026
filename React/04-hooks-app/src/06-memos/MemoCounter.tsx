import useCounter from "@/Hooks/useCounter";
import { useMemo } from "react";

const HeavyStuff = (iterationNumber: number) => {
  console.time("HeavyStuff-estarted");
  for (let index = 0; index < iterationNumber; index++) {
    console.log("Ahi vamos...");
  }
  console.timeEnd("HeavyStuff-Ended");

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_000);
  const { counter: counter2, increment: increment2 } = useCounter(10);

  const myHeavyValue = useMemo(() => HeavyStuff(counter), [counter]);
  // use callBack => memoriza Funciones
  // useMemo => memoriza Valores

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo - {myHeavyValue}</h1>

      <hr />
      <h4 className="">Counter: {counter}</h4>
      <h4 className="">Counter: {counter2}</h4>

      <button className="btn-primary" onClick={increment}>
        +1
      </button>

      <button className="btn-primary" onClick={increment2}>
        +1 - Counter 2
      </button>
    </div>
  );
};
