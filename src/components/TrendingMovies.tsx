import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TrendingSnapCard from "./TrendingSnapCard";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native"; // Import Dimensions
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Color from "../config/Color";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");

export interface Trending {
  id: number;
  poster_path?: string;
  title?: string;
}

export interface fetchTrendInterface {
  page: number,
  results: Trending[]
}

interface Props {
  movies: Trending[],
  handleNavigation: (item: any) => void
}



const TrendingMovies = ({movies,handleNavigation} : Props) => {
  const navigation = useNavigation()

 

  return (
    <View>
      <View style={styles.wrapText}>
        <Text style={styles.title}>Trending Movies</Text>
        <Text style={styles.view}>view all</Text>
      </View>
      <Carousel
      
        data={movies}
        keyExtractor={({ id }: { id: any }) => id}
        renderItem={({ item }: { item: any }) => (
          <TrendingSnapCard item={item}  onPress={() => handleNavigation(item)} />
        )}
        firstItem={1}
        inactiveSlideScale={0.85}
        inactiveSlideOpacity={0.62}
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
    paddingHorizontal: 15,
  },
  title: {
    color: Color.textSlate300,
    fontSize: hp(2.8),
    fontWeight: "700",
    paddingBottom: 15,
  },
  view: {
    color: "rgb(100 116 139)",
    fontSize: hp(1.7),
    fontWeight: "500",
    paddingBottom: 15,
  },
});
