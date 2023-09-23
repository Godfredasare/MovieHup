import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../config/Color";
import { heightPercentageToDP } from "react-native-responsive-screen";
import movies from "../data/movies";
import RecentCard from "./RecentCard";

export interface Popular {
  id: number;
  title: string;
  overview?: string;
  poster_path: string;
}

const RecentMovies = () => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <View style={styles.wrapText}>
        <Text style={styles.title}>Recently Added Movies</Text>
        <Text style={styles.view}>view all</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
        {movies.map((movie) => (
          <View key={movie.id}>
            <RecentCard item={movie} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecentMovies;

const styles = StyleSheet.create({
  wrapText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: Color.textSlate300,
    fontSize: heightPercentageToDP(2.5),
    fontWeight: "800",
    paddingBottom: 15,
  },
  view: {
    color: "rgb(100 116 139)",
    fontSize: heightPercentageToDP(1.7),
    fontWeight: "500",
    paddingBottom: 15,
  },
});
