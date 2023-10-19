import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import avarta from "../../assets/images/avatar.jpg";

export interface Trending {
  id: number;
  poster_path?: string;
  title?: string;
  overview?: string;
}

interface Props {
  item: Trending;
}

const TrendingSnapCard = ({ item }: Props) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
        style={styles.image}
      />
    </View>
  );
};

export default TrendingSnapCard;

const styles = StyleSheet.create({
  image: {
    width: hp(32),
    height: hp(42),
    alignSelf: "center",
    borderRadius: 20,
  },
});
