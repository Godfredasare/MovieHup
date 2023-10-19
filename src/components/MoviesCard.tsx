import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export interface MovieListInterface {
  id: number;
  title?: string;
  overview?: string;
  poster_path: string;
}

interface Props {
  item: MovieListInterface;
  style?: object
}
const MoviesCard = ({ item, style }: Props) => {
  return (
    <View>
      <Image
      resizeMode="contain"
        style={[styles.image, style]}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
      />
    </View>
  );
};

export default MoviesCard;

const styles = StyleSheet.create({
  image: {
    width: hp(13),
    height: hp(18),
    borderRadius: 8,
  },
});
