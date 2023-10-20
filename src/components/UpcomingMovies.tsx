import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../config/Color";
// import movies from "../data/movies";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import MoviesCard from "./MoviesCard";

export interface Upcomming {
  id: number;
  title: string;
  poster_path: string;
}

export interface fetchUpcommingInterface {
  page: number,
  results: Upcomming[]
}

interface Props {
  movies: Upcomming[]
}

const UpcomingMovies = ({movies}: Props) => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View style={styles.wrapText}>
        <Text style={styles.title}>Upcoming</Text>
        <Text style={styles.view}>view all</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={{ gap: 15 }}>
        {movies.map((movie) => (
          <View key={movie.id}>
            <MoviesCard
              item={movie}
              style={{
                width: hp(25),
                height: hp(26),
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UpcomingMovies;

const styles = StyleSheet.create({
  wrapText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: Color.textSlate300,
    fontSize: hp(2.5),
    fontWeight: "600",
    paddingBottom: 15,
  },
  view: {
    color: "rgb(100 116 139)",
    fontSize: hp(1.7),
    fontWeight: "500",
    paddingBottom: 15,
  },
});
