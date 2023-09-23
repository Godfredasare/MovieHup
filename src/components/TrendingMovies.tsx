import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import TrendingSnapCard from "./TrendingSnapCard";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native"; // Import Dimensions
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import movies from "../data/movies";
import Color from "../config/Color";

var { width, height } = Dimensions.get("window");

const TrendingMovies = () => {
  return (
    <View >
      <View style={styles.wrapText}>
        <Text style={styles.title}>Trending Movies</Text>
        <Text style={styles.view}>view all</Text>
      </View>
      <Carousel
        data={movies}
        keyExtractor={({ id }: { id: any }) => id}
        renderItem={({ item }: { item: any }) => (
          <TrendingSnapCard item={item} />
        )}
        firstItem={1}
        inactiveSlideScale={0.80}
        inactiveSlideOpacity={0.45}
        sliderWidth={width}
        itemWidth={width * 0.67}
        slideStyle={{ display: "flex", alignItems: "center" }}
        vertical={false}
      />
    </View>
  );
};

export default TrendingMovies;

const styles = StyleSheet.create({
  wrapText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  title: {
    color: Color.textSlate300,
    fontSize: hp(2.8),
    fontWeight: "700",
    paddingBottom: 15,
    // paddingLeft: 15,
  },
  view: {
    color: "rgb(100 116 139)",
    fontSize: hp(1.7),
    fontWeight: "500",
    paddingBottom: 15,
  },
});
