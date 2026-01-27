import React, { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubTitle } from "./ui/MySubTitle";

// const handleMyAPICall = useCallback(() => {
//   Al encontrarse Fuera del componente no se vuelve a crear en cada render
//   console.log("Llamando a mi API...");
// }, [subTitle]);

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola ");
  const [subTitle, setSubtitle] = useState(" mundo");
  // lo mismo que el UseEffect  cuando una dependencias cambia se vuelve a memorizar la funcion
  // lo cual es comun si un argumento cambia
  //useCallback  es un Hook que puede ser sustituido por el compilador de React!!
  const handleMyAPICall = useCallback(() => {
    //useCallback  memoriza la funcion
    console.log("Llamando a mi API...");
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoHook</h1>

      <MyTitle title={title} />
      <MySubTitle subtitle={subTitle} CallMyAPI={handleMyAPICall} />

      <button
        className=" bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle("Hola, " + new Date().getTime())}
      >
        Cambiar Título
      </button>

      <button
        className=" bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubtitle(" Mundo ")}
      >
        Cambiar Subtitulo
      </button>
    </div>
  );
};
