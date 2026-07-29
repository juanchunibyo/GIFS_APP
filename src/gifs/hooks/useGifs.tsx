import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import { useState } from "react";
import { useRef } from "react";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  // 3. Tipado explícito de string[]
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  // 4. Conectado para ejecutar la búsqueda al hacer clic en el historial
  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    handleSearch(term);
    const gifs = await getGifsByQuery(term);
    setGifs(gifs);

    gifsCache.current[term] = gifs;
  };

  const handleSearch = async (query: string = "") => {
    const cleanQuery = query.trim().toLowerCase();

    if (cleanQuery.length === 0) return;

    if (previousTerms.includes(cleanQuery)) return;

    setPreviousTerms([cleanQuery, ...previousTerms.slice(0, 8)]);

    const gifsResponse = await getGifsByQuery(cleanQuery);

    setGifs(gifsResponse);
  };

  return {
    //value
    gifs,

    //methods
    handleSearch,
    previousTerms,
    handleTermClicked,
  };
};
