import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../config/Color";
import { heightPercentageToDP } from "react-native-responsive-screen";
import MoviesCard from "./MoviesCard";
import { useNavigation } from "@react-navigation/native";

export interface MovieListInterface {
  id: number;
  title?: string;
  poster_path: string;
}

export interface fetchMovieListInterface {
  page: number;
  results: MovieListInterface[];
}
interface Props {
  title: string;
  moviesData: MovieListInterface[],
  handleNavigation: (id: number) => void
}

const MoviesList = ({ title, moviesData, handleNavigation }: Props) => {
const navigation =  useNavigation()

  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View style={styles.wrapText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.view}>view all</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
        {moviesData.map((movie) => (
          <View key={movie.id}>
            <MoviesCard item={movie} onPress={() => handleNavigation(movie.id)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  wrapText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: Color.textSlate300,
    fontSize: heightPercentageToDP(2.5),
    fontWeight: "600",
    paddingBottom: 15,
  },
  view: {
    color: "rgb(100 116 139)",
    fontSize: heightPercentageToDP(1.7),
    fontWeight: "500",
    paddingBottom: 15,
  },
});
