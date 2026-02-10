import { Toaster } from "sonner";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import { ClientInformation } from "./08-use-suspense/ClientInformation";
//import { getUserAction } from "./08-use-suspense/api/get-user.actions";
import { ProfessionalApp } from "./09-useContext/ProfessionalApp";
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
//import { InstagromApp } from "./07-useOptimistic/InstagromApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
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
    {/*<InstagromApp /> */}
    {/*<Suspense
      fallback={
        <div className="text-white bg-gradient flex-col flex">
          <h1 className="text-2xl">Cargando información del cliente...</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense>*/}
    <ProfessionalApp />
  </StrictMode>,
);
