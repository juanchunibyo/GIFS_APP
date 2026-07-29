import { CustomHeader } from "./share/components/CustomHeader";
import { SearchBar } from "./share/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();

  return (
    <>
      {/* HEADER */}
      <CustomHeader title="Mis gifs" description="Descubre los mejores gifs" />

      {/* SEARCHBAR */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* BUSQUEDAS PREVIAS */}
      <PreviousSearches
        searches={previousTerms}
        OnLabelClicked={handleTermClicked}
      />

      {/* GIFS */}
      <GifList gifs={gifs} />
    </>
  );
};
