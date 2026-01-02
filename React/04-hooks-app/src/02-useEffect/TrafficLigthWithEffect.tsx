import { useEffect, useState } from "react";

const color = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};
// interfaces la uso para validar como lucen los objetos
//type para un primitivo en especifico
// las interfaces como tipo no hacen una transformacion de datos
//type TrafficLigthsColor = "red" | "yellow" | "green";

type TrafficLigthsColor = keyof typeof color;

export const TrafficLightWithEffect = () => {
  const [ligth, setLigth] = useState<TrafficLigthsColor>("red");
  const [countdonw, setCountdonw] = useState(5);
  useEffect(() => {
    if (countdonw === 0) return;
    // if (countdonw === 0) {
    //   setCountdonw(5);
    //   if (ligth === "red") {
    //     setLigth("green");
    //     return;
    //   }
    //   if (ligth === "yellow") {
    //     setLigth("red");
    //     return;
    //   }
    //   if (ligth === "green") {
    //     setLigth("red");
    //     return;
    //   }
    //   return;
    // }

    console.log({ countdonw });

    const intervalId = setInterval(() => {
      console.log("setInterval llamado ");
      setCountdonw((prev) => prev - 1);
    }, 1000);

    return () => {
      console.log("Limpieza del setInterval");
      clearInterval(intervalId);
    };
  }, [countdonw]);

  // change light color effect

  useEffect(() => {
    if (countdonw > 0) return;
    setCountdonw(5);

    if (ligth === "red") {
      setLigth("green");
      return;
    }
    if (ligth === "yellow") {
      setLigth("red");
      return;
    }
    if (ligth === "green") {
      setLigth("yellow");
      return;
    }
  }, [countdonw, ligth]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">Semafor con useEffect</h1>
        <h2 className="text-white text-xl">{countdonw}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${((5 - countdonw) / 5) * 100}%` }}
          ></div>
        </div>

        <div
          className={`w-32 h-32 ${
            ligth === "red" ? color[ligth] : "bg-gray-500"
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            ligth === "yellow" ? color[ligth] : "bg-gray-500"
          } rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${
            ligth === "green" ? color[ligth] : "bg-gray-500"
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
};
