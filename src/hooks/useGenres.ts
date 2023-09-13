// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");

// using local data insted
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

// using react query
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h cache
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
