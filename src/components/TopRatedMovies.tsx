import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../config/Color";
import { heightPercentageToDP } from "react-native-responsive-screen";
import movies from "../data/movies";
import MoviesCard from "./MoviesCard";

export interface Popular {
  id: number;
  title: string;
  overview?: string;
  poster_path: string;
}

const TopRatedMovies = () => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View style={styles.wrapText}>
        <Text style={styles.title}>Top rated</Text>
        <Text style={styles.view}>view all</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
        {movies.map((movie) => (
          <View key={movie.id}>
            <MoviesCard item={movie} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopRatedMovies;

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
