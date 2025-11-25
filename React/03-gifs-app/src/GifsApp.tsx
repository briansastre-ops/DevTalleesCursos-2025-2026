import React from "react";
import { mockGifs } from "./mock-data/gifs.mock";

const GifsApp = () => {
  return (
    <>
      {/* <-- Header--> */}
      <div className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Descubre y encuentra el gif perfecto</p>
      </div>
      {/* <-- Search --> */}
      <div className="search-container">
        <input type="text" placeholder="Buscar gifs..." />
        <button className="search-button">Buscar</button>
      </div>

      {/* <-- BUsquedas Previas --> */}
      <div className="previous-searches">
        <h2 className="">busquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>saitama</li>
          <li>Elden Ring</li>
          <li>Batman</li>
        </ul>
      </div>

      {/* <-- Gifs Resultados --> */}

      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img
              src={gif.url}
              alt={gif.title}
              width={gif.width}
              height={gif.height}
            />
            <p>{gif.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default GifsApp;
