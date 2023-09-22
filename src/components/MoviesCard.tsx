import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Popular {
  id: number;
  title?: string;
  overview?: string;
  poster_path: string;
}

interface Props {
  item: Popular;
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
    width: hp(15),
    height: hp(20),
    borderRadius : 16 ,
  },
});