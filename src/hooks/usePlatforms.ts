// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
// using local data insted
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

// using react query
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/list/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h cache
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
