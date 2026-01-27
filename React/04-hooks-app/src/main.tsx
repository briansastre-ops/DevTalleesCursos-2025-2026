import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { InstagromApp } from "./07-useOptimistic/InstagromApp";
//import { HooksApp } from "./HooksApp";
//import { TrafficLight } from "./01-useState/TrafficLigth";
//import { TrafficLightWithEffect } from "./02-useEffect/TrafficLigthWithEffect";
//import { TrafficLightWithHook } from "./02-useEffect/TrafficLigthWithHook";
//import { PokemonPage } from "./03-examples/PokemonPage";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { ScrambleWords } from "./05-useReducer/Reducer/ScrambleWords";
//import { MemoHook } from "./06-memos/MemoHook";
//import { TasksApp } from "./05-useReducer/TaskApp";
//import { MemoCounter } from "./06-memos/MemoCounter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/*<FocusScreen />*/}
    {/*<TasksApp />*/}
    {/*<ScrambleWords />*/}
    {/*<MemoHook />*/}
    {/*<MemoCounter />*/}

    <InstagromApp />
  </StrictMode>,
);
