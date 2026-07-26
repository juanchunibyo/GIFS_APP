import { CustomHeader } from "./share/components/CustomHeader";
import type { Gif } from "./mock-data/gifs.mock";
import { SearchBar } from "./share/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

export const GifsApp = () => {
  // 1 y 2. Corregido el tipo Gif[] y el nombre 'setGifs'
  const [gifs, setGifs] = useState<Gif[]>([]);

  // 3. Tipado explícito de string[]
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  // 4. Conectado para ejecutar la búsqueda al hacer clic en el historial
  const handleTermClicked = (term: string) => {
    handleSearch(term);
  };

  const handleSearch = async (query: string = "") => {
    const cleanQuery = query.trim().toLowerCase();

    if (cleanQuery.length === 0) return;

    if (previousTerms.includes(cleanQuery)) return;

    setPreviousTerms([cleanQuery, ...previousTerms.slice(0, 8)]);

    const gifsResponse = await getGifsByQuery(cleanQuery);

    // Asignamos el resultado al estado
    setGifs(gifsResponse);
  };

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
