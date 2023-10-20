import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../config/Color";
import { Platform } from "react-native";
import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import avarta from "../../assets/images/avatar.jpg";
import TrendingMovies, { Trending } from "../components/TrendingMovies";
import Primium from "../components/Primium";
import UpcomingMovies, { Upcomming } from "../components/UpcomingMovies";
import MoviesList, { MovieListInterface } from "../components/MovieList";
import movies from "../data/movies";
import {
  fetchTrendingMovies,
  fetchUpcomingMovies,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "../service/fetchApi";

const HomeScreen = () => {
  const [trending, setTrending] = useState<Trending[]>([]);
  const [upcoming, setUpcoming] = useState<Upcomming[]>([]);
  const [popular, setPopular] = useState<MovieListInterface[]>([]);
  const [nowPlaying, setNowPlaying] = useState<MovieListInterface[]>([]);
  const [rated, setRated] = useState<MovieListInterface[]>([]);

  const getTrendingMovies = async () => {
    try {
      const res = await fetchTrendingMovies();
      setTrending(res.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const res = await fetchUpcomingMovies();
      setUpcoming(res.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  const getPopularMovies = async () => {
    try {
      const res = await fetchPopularMovies();
      setPopular(res.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  const getNowPlayingMovies = async () => {
    try {
      const res = await fetchNowPlayingMovies();
      setNowPlaying(res.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };
  const getTopRatedMovies = async () => {
    try {
      const res = await fetchTopRatedMovies();
      setRated(res.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getPopularMovies();
    getNowPlayingMovies();
    getTopRatedMovies();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <Bars3BottomRightIcon color={Color.white} size={hp(4)} />
            <MagnifyingGlassIcon
              color={Color.white}
              size={hp(3)}
              strokeWidth={4}
            />
          </View>

          <View style={{ gap: 40 }}>
            <Primium premiumImage={avarta} />
            <TrendingMovies movies={trending} />
            <View style={{ gap: 30 }}>
              <MoviesList moviesData={popular} title="Popular" />
              <UpcomingMovies movies={upcoming} />
              <MoviesList moviesData={nowPlaying} title="Now Playing Movies" />
              <MoviesList moviesData={rated} title="Top Rated Movies" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: Platform.OS == "android" ? 35 : null,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },

  premium: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  premiumImage: {
    width: "100%",
    height: hp(13),
    borderRadius: 15,
  },
  premiumGradient: {
    width: "100%",
    height: hp(13),
    borderRadius: 15,
    position: "absolute",
  },
  namePremium: {
    color: Color.white,
    width: "60%",
    fontSize: hp(2),
    fontWeight: "600",
  },
  button: {
    backgroundColor: Color.secondary,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    width: hp(18),
    borderRadius: 10,
  },
  premiumButtonText: {
    fontSize: hp(2),
    fontWeight: "600",
    color: Color.white,
  },
});
