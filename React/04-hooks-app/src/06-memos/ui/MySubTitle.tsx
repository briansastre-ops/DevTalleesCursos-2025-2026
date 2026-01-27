import React from "react";

interface Prorp {
  subtitle: string;

  CallMyAPI: () => void;
}
export const MySubTitle = React.memo(({ subtitle, CallMyAPI }: Prorp) => {
  console.log("mi subtitle re rende");
  return (
    <>
      <h6 className="text-2xl">{subtitle}</h6>
      <button
        className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
        onClick={CallMyAPI}
      >
        Call Funcion
      </button>
    </>
  );
});
