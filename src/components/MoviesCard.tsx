import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MovieListInterface } from "./MovieList";

interface Props {
  item: MovieListInterface;
  style?: object;
  onPress: () => void
}
const MoviesCard = ({ item, style, onPress }: Props) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Image
          resizeMode="contain"
          style={[styles.image, style]}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
        />
      </Pressable>
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
