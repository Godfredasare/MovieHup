import { fetchTrendInterface } from "../components/TrendingMovies";
import apiClient from "./api-client";


export const fetchTrendingMovies = async () => {
  const res = await apiClient.get<fetchTrendInterface>('/trending/movie/day?language=en-US');
  return res;
};

