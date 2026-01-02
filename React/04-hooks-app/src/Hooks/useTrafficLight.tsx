import { useState, useEffect } from "react";

const color = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLigthsColor = keyof typeof color;
// // interfaces la uso para validar como lucen los objetos
// //type para un primitivo en especifico
// // las interfaces como tipo no hacen una transformacion de datos
// //type TrafficLigthsColor = "red" | "yellow" | "green";
const useTrafficLight = () => {
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

  return {
    //props
    ligth,
    countdonw,
    color,

    //Computded
    porcentage: ((5 - countdonw) / 5) * 100,
    greenLigth: ligth === "green" ? color.green : "bg-gray-500",
    yellowLigth: ligth === "yellow" ? color.yellow : "bg-gray-500",
    redLigth: ligth === "red" ? color.red : "bg-gray-500",

    //methods
  };
};

export default useTrafficLight;
