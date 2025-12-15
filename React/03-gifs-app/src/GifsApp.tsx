import PreviousSearches from "./gifs/components/PreviousSearches";
import CustomHeader from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import GifsList from "./gifs/components/GifsList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleTermClicked, handleSearch } = useGifs();
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
