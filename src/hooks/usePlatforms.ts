// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/list/parent");

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
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h cache
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
