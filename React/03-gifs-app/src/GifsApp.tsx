import { useState } from "react";
import PreviousSearches from "./gifs/components/PreviousSearches";
import CustomHeader from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import GifsList from "./gifs/components/GifsList";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };
  return (
    <>
      {/* <-- Header--> */}
      <CustomHeader
        title="Buscador de Gifs"
        descrption="Descubre y encuentra el gif perfecto"
      />
      {/* <-- Search --> */}
      <SearchBar
        placeholder="Buscar lo que quieras..."
        onQuery={handleSearch}
      />

      {/* <-- BUsquedas Previas --> */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      {/* <-- Gifs Resultados --> */}
      <GifsList gifs={gifs} />
    </>
  );
};

export default GifsApp;
