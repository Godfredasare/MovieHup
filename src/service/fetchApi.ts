import {
  fetchMovieListInterface,
} from "../components/MovieList";
import { fetchTrendInterface } from "../components/TrendingMovies";
import { fetchUpcommingInterface } from "../components/UpcomingMovies";
import {
  MovieCastsInterface,
  MovieDetailsInterface,
} from "../screens/MovieDetails";
import apiClient from "./api-client";

export const fetchTrendingMovies = async () => {
  const res = await apiClient.get<fetchTrendInterface>(
    "/trending/movie/day?language=en-US"
  );
  return res;
};

export const fetchPopularMovies = async () => {
  const res = await apiClient.get<fetchMovieListInterface>(
    "/movie/popular?language=en-US"
  );
  return res;
};

export const fetchNowPlayingMovies = async () => {
  const res = await apiClient.get<fetchMovieListInterface>(
    "/movie/now_playing?language=en-US"
  );
  return res;
};

export const fetchTopRatedMovies = async () => {
  const res = await apiClient.get<fetchMovieListInterface>(
    "/movie/top_rated?language=en-US"
  );
  return res;
};

export const fetchUpcomingMovies = async () => {
  const res = await apiClient.get<fetchUpcommingInterface>(
    "/movie/upcoming?language=en-US"
  );
  return res;
};

export const fetchMoviesDetails = async (id: number) => {
  const res = await apiClient.get<MovieDetailsInterface>(
    `/movie/${id}?language=en-US`
  );
  return res;
};
export const fetchMoviesCreditDetails = async (id: number) => {
  const res = await apiClient.get<MovieCastsInterface>(`/movie/${id}/credits?language=en-US`);
  return res;
};
