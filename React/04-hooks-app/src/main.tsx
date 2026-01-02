import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { HooksApp } from "./HooksApp";
import "./index.css";
//import { TrafficLightWithEffect } from "./02-useEffect/TrafficLigthWithEffect";
//import { TrafficLight } from "./01-useState/TrafficLigth";
import { TrafficLightWithHook } from "./02-useEffect/TrafficLigthWithHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/*<TrafficLight />*/}
    {/*<TrafficLightWithEffect />*/}
    <TrafficLightWithHook />
  </StrictMode>
);
